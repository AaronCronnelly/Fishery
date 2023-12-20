import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function edit(){
    let{id}=useParams();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [lake, setLake] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');

    const navigate=useNavigate();

    useEffect(
        ()=>{
            axios.get('http://localhost:4000/api/fishInfo')
            .then
        }
    )
};