// Components
import {
  ClientsList,
  Edit as EditClient,
  ADD as AddClient,
  ClientOrders,
} from "./screens";

const routes = [
  // Routes

  /* Clients routes */
  { path: "/clients/list", exact: true, component: ClientsList },
  { path: "/client/add", component: AddClient },
  { path: "/client/edit/:clientId", component: EditClient },
  { path: "/client/orders/:clientId", component: ClientOrders },
];

export default routes;
