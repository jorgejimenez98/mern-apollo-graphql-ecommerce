// Screens
import {
  ClientsList,
  Edit as EditClient,
  ADD as AddClient,
  ClientOrders,
  AddProduct,
  ListProduct,
  EditProduct
} from "./screens";

const routes = [
  // Routes

  /* Clients routes */
  { path: "/clients/list", exact: true, component: ClientsList },
  { path: "/client/add", component: AddClient },
  { path: "/client/edit/:clientId", component: EditClient },
  { path: "/client/orders/:clientId", component: ClientOrders },

  /* Products Routes */
  { path: "/products/add", component: AddProduct },
  { path: "/products/list", component: ListProduct },
  { path: "/products/edit/:productId", component: EditProduct },
];

export default routes;
