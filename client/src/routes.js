// Components
import { ClientsList, Edit as EditClient, ClientOrders } from "./screens";

const routes = [
  // Routes
  { path: "/clients/list", exact: true, component: ClientsList },
  { path: "/client/edit/:clientId", component: EditClient },
  { path: "/client/orders/:clientId", component: ClientOrders },
];

export default routes;
