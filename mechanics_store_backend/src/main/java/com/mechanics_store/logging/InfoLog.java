package com.mechanics_store.logging;

import com.mechanics_store.controller.dto.UserDTO;

public record InfoLog(UserDTO currentUser, String message) implements Log {

}
