import app from "./app";
import { getAllUsersOrdered } from "./endpoints/getAllUsersOrdered";
import { getUsersFilterByName } from "./endpoints/getUsersFilterByName";
import { getUsersFilterByType } from './endpoints/getUsersFilterByType';
import { getUsersByPages } from './endpoints/getUsersByPages';
import { getUsersFilterAndOrderAndPage } from "./endpoints/getUsersFilterAndOrderAndPage";

app.get("/user", getUsersFilterByName );
app.get("/user/fullsearch", getUsersFilterAndOrderAndPage);
app.get("/user/search", getAllUsersOrdered);
app.get("/user/page", getUsersByPages);
app.get("/user/:type", getUsersFilterByType);