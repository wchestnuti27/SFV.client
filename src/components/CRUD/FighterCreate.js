import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import FighterEdit from '../FighterUpdate/FighterEdit';


const FighterCreate = (props) => {
    
    return(
        <>
                    <h3>Rate a Fighter</h3>
                     <Form>
                        <FormGroup>
                            <Label htmlFor="fighter" />
                            <Input type="select" name="fighter" value={props.fighter} onChange={(e) => {props.setFighter(e.target.value); console.log(e.target.value)}}>    
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
                                <option value="Abigail">Abigail</option>
                                <option value="Gill">Gill</option>
                                <option value="Seth">Seth</option>
                                </Input>
                            </FormGroup>
                        <FormGroup>
                            <Label htmlFor="ratings"/>
                            <Input name="ratings" value={props.ratings} onChange={(e) => props.setRatings(e.target.value)}/>
                        </FormGroup>    
                            <Button color="submit" onClick={props.postFighter}>Click to Submit</Button>
                        </Form>
                </>
            )
        }

export default FighterCreate;