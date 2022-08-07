import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
  Typography,
  Button,
  Card,
  CardActions,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { useEthers } from '@usedapp/core';
import { NETWORK } from './../../constants';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EMobiledataIcon from '@mui/icons-material/EMobiledata';
import GridViewIcon from '@mui/icons-material/GridView';
import hash from 'object-hash';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getEventDetails = (values, chainName) => {
  const {
    contractAddress,
    type: standardContractType,
    tokenType,
    tokenId,
    eventName: name,
    eventCategory: category,
    eventDescription: description,
    eventIcon: icon,
    guests,
  } = values;
  let parameters = [':userAddress'];
  if (standardContractType === 'ERC1155') {
    parameters.push(tokenType);
  }
  const accessControlConditions = [
    {
      contractAddress,
      standardContractType,
      chain: chainName,
      method: 'balanceOf',
      parameters,
      returnValueTest: {
        comparator: '>',
        value: '0',
      },
    },
  ];
  const gracePeriod = 100000;
  const nonce = getRandomInt(100000);
  const color = '';
  const metadata = { name, category, description, gracePeriod, icon, color };
  const resourceId = {
    baseUrl: 'ourpass',
    path: hash(accessControlConditions),
    orgId: `${chainName}-ourpass-${contractAddress}-${nonce}`,
    role: 'none',
    extraData: JSON.stringify({ metadata }),
  };
  const event = {
    name,
    category,
    description,
    gracePeriod,
    icon,
    color,
    guests,
    resourceId,
    accessControlConditions,
    nonce,
    contractAddress,
  };
  return event;
};

export const CreateEventForm = ({ createEvent }) => {
  const { error, chainId } = useEthers();
  if (!chainId || error) {
    return <div>Connect Wallet</div>;
  }
  const chainName = NETWORK(chainId).name;
  return (
    <Container sx={{ padding: 4 }}>
      <Card sx={{ maxWidth: 'md' }}>
        <Formik
          initialValues={{
            contractAddress: '0xc716950e5deae248160109f562e1c9bf8e0ca25b',
            type: 'ERC1155',
            tokenType: '408',
            tokenId: '',
            eventName: 'Metabolism',
            eventCategory: 'Hackathon',
            eventDescription:
              'Build the future creative on-chain ecosystem with the ZORA Protocol and ETHGlobal',
            eventIcon: 'https://zora.ethglobal.com/img/metabolism-logo.svg',
            guests: '2',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            const event = getEventDetails(values, chainName);
            alert(JSON.stringify(event, null, 2));
            // alert(JSON.stringify(values, null, 2));
            createEvent(event, chainName);
          }}
        >
          <Form>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Contract">
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="contractAddress">
                        <Typography variant="h5" color="white">
                          NFT Contract ID
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="contractAddress"
                        name="contractAddress"
                        placeholder="Enter Contract ID"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Contract Type">
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label id="contractType" htmlFor="contractType">
                        <Typography variant="h5" color="white">
                          Contract Type
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <div role="group" aria-labelledby="contractType">
                        <label>
                          <div>
                            <Field type="radio" name="type" value="ERC721" />
                            <Typography component="span" color="white">
                              ERC721
                            </Typography>
                          </div>
                        </label>
                        <label>
                          <div>
                            <Field type="radio" name="type" value="ERC1155" />
                            <Typography component="span" color="white">
                              ERC1155
                            </Typography>
                          </div>
                        </label>
                      </div>
                    </>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Token Type">
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="tokenType">
                        <Typography variant="h4" color="white">
                          Token Type
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="tokenType"
                        name="tokenType"
                        placeholder="Enter Token Type"
                      />
                      <Typography variant="subtitle2" color="white">
                        Use Only In Case Of ERC1155
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Token Id">
                    <LibraryBooksIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="tokenId">
                        <Typography variant="h4" color="white">
                          Token ID
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="tokenId"
                        name="tokenId"
                        placeholder="Enter Token ID"
                      />
                      <Typography variant="subtitle2" color="white">
                        Leave Blank To Allow All Token Holders To Participate
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Chain">
                    <GridViewIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography variant="h4" color="white">
                        Chain
                      </Typography>
                    </>
                  }
                  secondary={<>{chainName}</>}
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Event Name">
                    <EMobiledataIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="eventName">
                        <Typography variant="h5" color="white">
                          Event Name
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="eventName"
                        name="eventName"
                        placeholder="Enter Event Name"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Event Category">
                    <EMobiledataIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="eventCategory">
                        <Typography variant="h5" color="white">
                          Event Category
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="eventCategory"
                        name="eventCategory"
                        placeholder="Enter Event Category"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Event Description">
                    <EMobiledataIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="eventDescription">
                        <Typography variant="h5" color="white">
                          Event Description
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="eventDescription"
                        name="eventDescription"
                        placeholder="Enter Event Description"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Event Icon">
                    <EMobiledataIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="eventDescription">
                        <Typography variant="h5" color="white">
                          Event Icon
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="eventIcon"
                        name="eventIcon"
                        placeholder="Enter Event Icon"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Event Icon">
                    <EMobiledataIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <label htmlFor="guests">
                        <Typography variant="h5" color="white">
                          Number Of Guests
                        </Typography>
                      </label>
                    </>
                  }
                  secondary={
                    <>
                      <Field
                        id="guests"
                        name="guests"
                        placeholder="Number Of Guests"
                      />
                      <Typography variant="subtitle2" color="white">
                        Each Holder Can Distribute Passes Equal To This Number
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </List>
            <CardActions>
              <Button variant="outlined" type="submit">
                Create
              </Button>
            </CardActions>
          </Form>
        </Formik>
      </Card>
    </Container>
  );
};
