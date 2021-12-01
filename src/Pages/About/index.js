import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div className="ContainerAbout">
      <h1>About the app</h1>
      <p>
        Sebuah aplikasi yang menampilkan laporan jumlah kasus
        Covid-19 secara Global, Indonesia dan Provinsi (Indonesia).
      </p>
      <p>
        Pada halaman provinsi dengan memakai search keyword kita dapat mencari data kasus Covid-19 di setiap provinsi.
      </p>
      <h1>API used</h1>
      <p>~ Global : https://covid19.mathdro.id/api</p>
      <p>~ Indonesia : https://covid19.mathdro.id/api/countries/indonesia</p>
      <p>~ Provinsi : https://indonesia-covid-19.mathdro.id/api/provinsi</p>
      <h1>Owner</h1>
      <p>Name: Frangky Fernando Wongkar</p>
      <p>NIM: 105011910064</p>
      <p>Faculty/Major: Computer Science/Information System</p>
    </div>
  );
};

export default About;
