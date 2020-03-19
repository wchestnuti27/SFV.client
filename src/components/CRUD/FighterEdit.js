import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../../helpers/environment';
// import FighterEdit from '../../CRUD/FighterEdit';
// import FighterCreate from '../../CRUD/FighterCreate';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { makeStyles } from '@material-ui/core/styles';

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


const FighterUpdate = (props) => {
    const classes = useStyles();

    console.log(props);
    
    const [editFighter, setEditFighter] = useState('');
    const [editRatings, setEditRatings] = useState(0);
    
    const updateFighter = (e) => {
        e.preventDefault();
            fetch(`${APIURL}/ratings/${props.fighterToUpdate.id}`, {
                method: 'PUT',
                body: JSON.stringify({fighter: editFighter, fighterRatings: editRatings}),
                headers: new Headers({
                    'Content-type': 'application/json',
                    'Authorization': props.token
                })
            }).then((res) => res.json())
            .then(() => {
                props.fetchFighter();
            }) 
            // .then(() => props.getFighters())
        }

// const updateOn =() => {
//     setUpdateActive(true);
// }

// const updateOff = () => {
//     setUpdateActive(false);
// }

const handleClose = () => {
    props.setOpen(false);
};


return(
    // <Modal
    // aria-labelledby="spring-modal-title"
    // aria-describedby="spring-modal-description"
    // className={classes.modal}
    // open={props.open}
    // onClose={handleClose}
    // closeAfterTransition
    // BackdropComponent={Backdrop}
    // BackdropProps={{
    // timeout: 500
    // }}  
    // >
    // <Fade in={props.open}>
    // <div className={classes.paper}>
    //     <h2 id="spring-modal-title">Update Fighter Ranking</h2>
    //     <Label htmlFor="fighter" />
    //     <Input type="select" name="fighter">    
    //         <option value=""></option>
    //         <option value="Ryu">Ryu</option>
    //         <option value="Chun-Li">Chun-Li</option>
    //         <option value="Nash">Nash</option>
    //         <option value="M.Bison">M.Bison</option>
    //         <option value="Cammy">Cammy</option>
    //         <option value="Birdie">Birdie</option>
    //         <option value="Ken">Ken</option>
    //         <option value="Necalli">Necalli</option>
    //         <option value="Vega">Vega</option>
    //         <option value="R.Mika">R.Mika</option>
    //         <option value="Rashid">Rashid</option>
    //         <option value="Karin">Karin</option>
    //         <option value="Zangief">Zangief</option>
    //         <option value="Laura">Laura</option>
    //         <option value="Dhalsim">Dhalsim</option>
    //         <option value="F.A.N.G">F.A.N.G</option>
    //         <option value="Alex">Alex</option>
    //         <option value="Guile">Guile</option>
    //         <option value="Ibuki">Ibuki</option>
    //         <option value="Balrog">Balrog</option>
    //         <option value="Juri">Juri</option>
    //         <option value="Urien">Urien</option>
    //         <option value="Akuma">Akuma</option>
    //         <option value="Kolin">Kolin</option>
    //         <option value="Ed">Ed</option>
    //         <option value="Abigail">Poison</option>
    //         <option value="Menat">Menat</option>
    //         <option value="Zeku">Zeku</option>
    //         <option value="Sakura">Sakura</option>
    //         <option value="Blanka">Blanka</option>
    //         <option value="Falke">Falke</option>
    //         <option value="Cody">Cody</option>
    //         <option value="G">G</option>
    //         <option value="Sagat">Sagat</option>
    //         <option value="Kage">Kage</option>
    //         <option value="E.Honda">E.Honda</option>
    //         <option value="Lucia">Lucia</option>
    //         <option value="Poison">Poison</option>
    //         <option value="Gill">Gill</option>
    //         <option value="Seth">Seth</option>
    //         </Input>
    //     <Label htmlFor="ratings"/>
    //     <Input name="ratings"/>
    //     <Button color="submit" onClick={() => props.editFighterNow(editFighter, editRatings)}>Submit</Button>
    // </div>
    // </Fade>
    <Form onSubmit = {(e) => updateFighter(e)}>
    <br/>
    <br/>
    <br/>
            <FormGroup>
                <Label htmlFor = "editFighter"/>
                <Input type="select" name="fighter" onClick={(e) => setEditFighter(e.target.value)}>    
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
            </FormGroup>
            <FormGroup>
                <Label htmlFor = "fighterRating"/>
                <Input name = "rating" value = {editRatings} onChange = {(e) => setEditRatings(e.target.value)}>
                </Input>
            </FormGroup>
            <Button type = "submit">click to Submit</Button>
        </Form>
    // </Modal>
  )
}


export default FighterUpdate;