import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEthers } from '@usedapp/core';
import { NETWORK } from './../../constants';
import Container from '@mui/material/Container';
import { lit } from '../lit/index';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QRCode from 'react-qr-code';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function ContractCard({ contract, description: des }) {
  const [passCondition, setPassCondition] = useState('');
  const { error, chainId } = useEthers();
  if (!chainId || error) {
    return <div>Connect Wallet</div>;
  }
  const chainName = NETWORK(chainId).name;
  const { event } = des;
  const {
    name,
    category,
    description,
    icon,
    guests,
    resourceId,
    accessControlConditions,
  } = event;

  const getPass = async () => {
    const metadata = await lit.applyForEvent(event, chainName);
    if (metadata) {
      setPassCondition(metadata);
    } else {
      setPassCondition(false);
    }
  };
  const passDialogOpen = typeof passCondition === 'object';
  const unpassDialogOpen = passCondition === false;
  const closeDialog = () => {
    setPassCondition('');
  };
  let ipfsUrl;
  if (typeof passCondition === 'object') {
    ipfsUrl = `https://ipfs.io/${passCondition.url.replace(
      'ipfs://',
      'ipfs/'
    )}`;
  }
  return (
    <>
      {passDialogOpen && (
        <Dialog open={passDialogOpen} onClose={closeDialog}>
          <DialogTitle>Congratulations! You can attend {name}</DialogTitle>
          <DialogContent>
            <DialogContentText>{ipfsUrl}</DialogContentText>
            <QRCode value={ipfsUrl} />
            <Button>Mint And Sell Guest Tickets</Button>
          </DialogContent>
        </Dialog>
      )}
      {passDialogOpen && (
        <Dialog open={unpassDialogOpen} onClose={closeDialog}>
          <DialogTitle>Sorry! You cannot attend {name}</DialogTitle>
          <DialogContent>
            <Button>Buy Token On Zora</Button>
          </DialogContent>
        </Dialog>
      )}
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={description}
        />
        <CardMedia component="img" height="194" image={icon} alt="Event Icon" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            You can mint {guests} guest passes for this event if you qualify
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={getPass}>Get Pass</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
