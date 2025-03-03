import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Chart from "react-apexcharts";
import axios from "axios";  

const ReactGraph = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get("http://localhost:3000/doctors");
                const data = response.data;
                if (Array.isArray(data)) {
                    setDoctors(data);
                } else {
                    console.error("Unexpected API response format:", data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchDoctors();
    }, []);
    
    const doctorNames = doctors.map(doctor => doctor.doctorName);
    const doctorPrices = doctors.map(doctor => Number(doctor.doctorPrice));

    console.log('Doctor Names:', doctorNames); 
    console.log('Doctor Prices:', doctorPrices);  

    const chartOptions = {
        xaxis: {
            categories: doctorNames,
            title: {
                text: "Doctor Names",
                style: { color: "#0495ff", fontSize: "20px" }
            },
            labels: {
                style: {
                    colors: "#FFff", 
                    fontSize: "17px", 
                    fontWeight: "500",
                }
            },
        },
        yaxis: {
            title: {
                text: "Doctor Prices",
                style: { color: "#0495ff", fontSize: "20px" }
            },
            labels: {
                style: {
                    colors: "#FFff", 
                    fontSize: "17px", 
                    fontWeight: "500",
                }
            },
        },
    };

    const chartSeries = [
        {
            name: "Doctor Charges",
            data: doctorPrices,
        }
    ];
    
    return (
        <Container className="py-5">
            <h3 className="text-white">Doctor Prices Chart</h3>
            {doctorNames.length > 0 && doctorPrices.length > 0 ? (
                <Chart type="bar" options={chartOptions} series={chartSeries} height={550} />
            ) : (
                <p className="text-white">Loading chart...</p>
            )}
        </Container>
    );
};

export default ReactGraph;
