import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
//import Avatar from 'avataaars';
import UserAvatar from "components/userAvatar";
import * as Styles from "./style";

export default function DrawerSlider() {
  const parsedUser = JSON.parse(localStorage.getItem('user') ?? '');

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemButton
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Styles.Icon>
            <i className="ph ph-x-circle"></i>
          </Styles.Icon>
        </ListItemButton>

        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Styles.Person>
            <UserAvatar  style={{width: '200px'}} className="avatar"></UserAvatar>
            <i className="ph ph-pencil"></i>
          </Styles.Person>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {parsedUser ? parsedUser.nome : ""}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                width: "1px",
              }}
            >
              <Styles.Icon>
                <i className="ph ph-pencil"></i>
              </Styles.Icon>
            </ListItem>
          </ListItem>
        </ListItem>
        <ListItemText
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {parsedUser ? parsedUser.roles[0].nome : ""}
        </ListItemText>
        <ListItemText
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Análise e desenvolvimento de sistemas
        </ListItemText>
      </List>
      <Divider />
      <List sx={{ height: "100%", display: "flex", alignItems: "end" }}>
        <ListItemButton
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Sair
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i color="#707070" className="ph ph-list"></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
