import { Content } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { getData } from "../server/common";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { SendOutlined } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Messages = () => {
  const [value, setValue] = useState(0);
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    getData("messages").then((res) => {
      setMessageData(res.data.data);
    });
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(checked);
    setChecked(newChecked);
  };
  const writeAnswer = () => {};
  return (
    <div>
      <div className="content-body">
        <div className="content-title">
          <h3>Messages</h3>
        </div>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All Messages" {...a11yProps(0)} />
                <Tab label="Answered" {...a11yProps(1)} />
                <Tab label="Unanswered" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {messageData.map((item, index) => {
                  return (
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            item.answer.length > 0 && `Answar - ${item.answer}`
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {item.user.last_name} {item.user.first_name}
                              </Typography>
                              {` — ${item.message}`}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </>
                  );
                })}
              </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {messageData
                  .filter((element) => element.answer.length > 0)
                  .map((item, index) => {
                    return (
                      <>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/1.jpg"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={`Answar - ${item.answer}`}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {item.user.last_name} {item.user.first_name}
                                </Typography>
                                {` — ${item.message}`}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </>
                    );
                  })}
              </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  bgcolor: "background.paper",
                }}
              >
                {messageData
                  .filter((element) => element.answer.length === 0)
                  .map((value) => {
                    const labelId = `checkbox-list-label-${value.message}`;

                    return (
                      <ListItem
                        key={value}
                        secondaryAction={
                          <IconButton edge="end" aria-label="comments">
                            <CommentIcon onClick={() => writeAnswer()} />
                          </IconButton>
                        }
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt="Travis Howard"
                              src="/static/images/avatar/2.jpg"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            id={labelId}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {value.user.last_name} {value.user.first_name}
                                </Typography>
                                {` — ${value.message}`}
                                
                                <div className=" mt-3 d-flex align-items-center">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& > :not(style)": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <TextField
                                      label="Answer"
                                      id="standard-size-small"
                                      size="small"
                                      variant="standard"
                                    />
                                  </Box>
                                  <div>
                                    <IconButton
                                      color="primary"
                                      aria-label="add to shopping cart"
                                    >
                                      <SendOutlined />
                                    </IconButton>
                                  </div>
                                </div>
                              </React.Fragment>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
              </List>
            </TabPanel>
          </Box>
        </Content>
      </div>
    </div>
  );
};

export default Messages;
