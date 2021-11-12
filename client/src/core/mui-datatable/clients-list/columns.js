import { LinkContainer } from "react-router-bootstrap";
import { Tooltip, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

export const clientColumns = [
  {
    name: "id",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "name",
    label: "Full Name",
    options: {
      filter: true,
      sort: true,
      viewColumns: true,
      customBodyRender: (value, tableMeta) => {
        const name = value;
        const lastName = tableMeta.rowData[4];
        return (
          <p>
            <strong>
              {name} {lastName}
            </strong>
          </p>
        );
      },
    },
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: true,
      viewColumns: true,
      customBodyRender: (company) => {
        return <p>{company}</p>;
      },
    },
  },
  {
    name: "id",
    label: "Acciones",
    options: {
      filter: false,
      viewColumns: false,
      sort: false,
      print: false,
      download: false,
      customBodyRender: (clientId, tableMeta) => {
        const name = tableMeta.rowData[1];
        return (
          <LinkContainer to={`/client/edit/${clientId}`}>
            <Tooltip title={`Edit Client: ${name}`} placement="bottom">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </LinkContainer>
        );
      },
    },
  },
  {
    name: "lastname",
    label: "lastname",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
];
