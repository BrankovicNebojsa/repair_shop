package com.mechanics_store.logging.json;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.mechanics_store.controller.dto.UserDTO;
import com.mechanics_store.controller.mapper.UserMapper;
import com.mechanics_store.logging.ErrorLog;
import com.mechanics_store.logging.InfoLog;
import com.mechanics_store.logging.Log;
import com.mechanics_store.logging.Logger;
import com.mechanics_store.model.User;
import com.mechanics_store.service.UserService;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class JsonLogger implements Logger {

    @Value("${logging.error.json}")
    private String JSON_ERROR_LOG;

    @Value("${logging.info.json}")
    private String JSON_INFO_LOG;
    private final UserService userService;
    private final UserMapper userMapper;
    private final Gson gson;

    public JsonLogger(UserService userService, UserMapper userMapper, Gson gson) {
        this.userService = userService;
        this.userMapper = userMapper;
        this.gson = gson;
    }

    @Override
    public synchronized void info(String message) {
        User currentUser = userService.getCurrentUser();
        UserDTO userDTO = userMapper.entityToDTO(currentUser);
        Type listType = new TypeToken<List<InfoLog>>() {
        }.getType();

        InfoLog infoLog = new InfoLog(userDTO, message);
        log(listType, infoLog, JSON_INFO_LOG);
    }

    @Override
    public synchronized void error(Throwable errorCause) {
        User currentUser = userService.getCurrentUser();
        UserDTO userDTO = userMapper.entityToDTO(currentUser);
        Type listType = new TypeToken<List<ErrorLog>>() {
        }.getType();

        ErrorLog errorLog = new ErrorLog(userDTO, ExceptionUtils.getStackTrace(errorCause));
        log(listType, errorLog, JSON_ERROR_LOG);
    }

    private void log(Type listType, Log log, String filePath) {
        List<? super Log> logs = new ArrayList<>();
        try (FileReader fileReader = new FileReader(filePath)) {
            logs = gson.fromJson(fileReader, listType);
            if (logs == null) {
                logs = new ArrayList<>();
            }
            logs.add(log);
        } catch (IOException e) {
            e.printStackTrace();
        }
        try (FileWriter fileWriter = new FileWriter(filePath, false)) {
            gson.toJson(logs, listType, fileWriter);
        } catch (IOException e) {
            error(e);
        }
    }

}
