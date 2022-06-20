import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Client, clients, CLIENT_TYPE } from "./data";

const app = express();
app.use(express.json());
app.use(cors())




