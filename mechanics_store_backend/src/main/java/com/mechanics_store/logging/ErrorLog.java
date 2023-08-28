package com.mechanics_store.logging;

import com.mechanics_store.controller.dto.UserDTO;

public record ErrorLog(UserDTO currentUser, String stackTrace) implements Log {

}
