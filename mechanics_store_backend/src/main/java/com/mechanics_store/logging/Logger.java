package com.mechanics_store.logging;

public interface Logger {
    void info(String message);
    void error(Throwable errorCause);
}