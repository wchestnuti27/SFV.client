import React, {useState} from 'react';
import './GlobalResults.css';
import APIURL from '../../../helpers/environment';
// import FighterEdit from '../../CRUD/FighterEdit';
import FighterCreate from '../../CRUD/FighterCreate';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Label, Input } from 'reactstrap';
import StreetCards from '../StreetCards';


const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  
  
  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });


const GlobalResults = (props) => {
    const [fighter, setFighter] = useState('');
    const [ratings, setRatings] = useState('');
    // const [updateActive, setUpdateActive] = useState(false);
    // const [fighterToUpdate, setFighterToUpdate] = useState({});

    const [open, setOpen] = useState(false);
    const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// const updateOn =() => {
//     setUpdateActive(true);
// }

// const updateOff = () => {
//     setUpdateActive(false);
// }

const updateFighter = (fighter) => {
        fetch(`${APIURL}/ratings/${fighter.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {fighter: setFighter, ratings: setRatings}}),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(handleOpen)
        .then(() => props.getFighters())
    }
    
    const deleteFighter = (fighter) => {
        fetch(`${APIURL}/ratings/${fighter.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.getFighters())
    }
    
    const postFighter = (e) => {
        e.preventDefault();
        const fightersObj = {
            fighter: fighter,
            fighterRatings: ratings
        }
        fetch(`${APIURL}/ratings/`, {
            method: 'POST',
            body: JSON.stringify(fightersObj),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(() => props.getFighters())
        .catch(err => console.log(err))
    }
    
    
return(


        <div style = {{textAlign: "center"}}>
            <br />
            <br />
            <br />
            <br />
            <StreetCards/>
            <br />
            <br />
            <br />
            <br />

            <FighterCreate setFighter={setFighter} setRatings={setRatings} postFighter={postFighter} ratings={ratings} fighter={fighter}/>
            <table>
                <thead>
                    <tr>
                        <th style = {{color: "blue", fontSize: "25px"}}>Fighter</th>
                        <th style = {{color: "blue", fontSize: "25px"}}>Fighter Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.ratings.map((ratingInfo, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ratingInfo.fighter}</td>
                                    <td>{ratingInfo.fighterRatings}</td>
                                    <td>
                                        <button onClick={() => {updateFighter(ratingInfo)}}>Update</button>
                                        <Modal
                                            aria-labelledby="spring-modal-title"
                                            aria-describedby="spring-modal-description"
                                            className={classes.modal}
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                            timeout: 500
                                            }}
                                        >
                                            <Fade in={open}>
                                            <div className={classes.paper}>
                                                <h2 id="spring-modal-title">Update Fighter Ranking</h2>
                                                <Label htmlFor="fighter" />
                                                <Input type="select" name="fighter" value={fighter} onChange ={(e) => setFighter(e.target.value)} >    
                                                    <option value=""></option>
                                                    <option value="Ryu">Ryu</option>
                                                    <option value="Chun-Li">Chun-Li</option>
                                                    <option value="Nash">Nash</option>
                                                    <option value="M.Bison">M.Bison</option>
                                                    <option value="Cammy">Cammy</option>
                                                    <option value="Birdie">Birdie</option>
                                                    <option value="Ken">Ken</option>
                                                    <option value="Necalli">Necalli</option>
                                                    <option value="Vega">Vega</option>
                                                    <option value="R.Mika">R.Mika</option>
                                                    <option value="Rashid">Rashid</option>
                                                    <option value="Karin">Karin</option>
                                                    <option value="Zangief">Zangief</option>
                                                    <option value="Laura">Laura</option>
                                                    <option value="Dhalsim">Dhalsim</option>
                                                    <option value="F.A.N.G">F.A.N.G</option>
                                                    <option value="Alex">Alex</option>
                                                    <option value="Guile">Guile</option>
                                                    <option value="Ibuki">Ibuki</option>
                                                    <option value="Balrog">Balrog</option>
                                                    <option value="Juri">Juri</option>
                                                    <option value="Urien">Urien</option>
                                                    <option value="Akuma">Akuma</option>
                                                    <option value="Kolin">Kolin</option>
                                                    <option value="Ed">Ed</option>
                                                    <option value="Abigail">Poison</option>
                                                    <option value="Menat">Menat</option>
                                                    <option value="Zeku">Zeku</option>
                                                    <option value="Sakura">Sakura</option>
                                                    <option value="Blanka">Blanka</option>
                                                    <option value="Falke">Falke</option>
                                                    <option value="Cody">Cody</option>
                                                    <option value="G">G</option>
                                                    <option value="Sagat">Sagat</option>
                                                    <option value="Kage">Kage</option>
                                                    <option value="E.Honda">E.Honda</option>
                                                    <option value="Lucia">Lucia</option>
                                                    <option value="Poison">Poison</option>
                                                    <option value="Gill">Gill</option>
                                                    <option value="Seth">Seth</option>
                                                    </Input>
                                                <Label htmlFor="ratings"/>
                                                <Input name="ratings" value={ratings} onChange={(e) => setRatings(e.target.value)}/>
                                                <Button color="submit" onSubmit={updateFighter}>Submit</Button>
                                            </div>
                                            </Fade>
                                        </Modal>
                                        <button onClick={() => {deleteFighter(ratingInfo)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* {updateActive ? <FighterEdit /> : <div></div>} */}
        </div>
    )
}

export default GlobalResults;