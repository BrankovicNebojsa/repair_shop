package com.mechanics_store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mechanics_store.model.Car;
import com.mechanics_store.model.Engine;
import com.mechanics_store.model.Model;
import com.mechanics_store.model.User;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author Nebojsa Brankovic
 */
@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    public Optional<Car> findByModel(Model model);

    public Optional<Car> findByEngine(Engine engine);

    public Optional<Car> findByLicensePlate(String licensePlate);

    public List<Car> findAllByOwner(User user);

}
