import React from "react";
import { Link } from "react-router-dom";

function Home() {
  if (localStorage.getItem("token") != null) {
    return (
      <>
        <h2 className="title">Mechanic's Store</h2>
        <br></br>
        <p>
          Bob's Auto Repair first opened in 1987. Bob and one mechanic, fixing
          cars and meeting new people. We quickly outgrew that shop and
          eventually moved into our current building. Over the years, we have
          come to know our customers like family. We have seen marriages,
          births, graduations and other milestones. It has been our pleasure to
          be a part of your lives. We understand the importance and necessity of
          having a dependable vehicle, and are honored to be in charge of that
          task in your lives. Thank you for your trust in us, thank you for
          sending your friends and family our way, and thank you for 30 years of
          serving you!
        </p>
        <p>
          Bob's Garage is a state-of-the-art full service auto repair facility
          offering minor or major repairs and maintenance on most all vehicles.
          We have the capability to diagnose and repair almost any problem a
          customer may have because of our ASE Certified Master Technicians.
        </p>
        <br></br>
        <h3>Contact us:</h3>
        <p>
          <b>Mail</b>: info@bobsautorepair.com
        </p>
        <p>
          <b>Phone number</b>: (310) 676-7770
        </p>
        <br></br>
        <h5>Find us at:</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.508317220911!2d-118.36084572288772!3d33.90231472562964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b43a0ca4bb75%3A0xe968ca264e9cfe58!2s4631%20Rosecrans%20Ave%2C%20Hawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sen!2srs!4v1692897905345!5m2!1sen!2srs"
          className="w-100"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </>
    );
  } else {
    window.location.href = "/login";
  }
}

export default Home;
