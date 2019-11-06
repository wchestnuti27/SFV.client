import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';

const FighterCreate = (props) => {

    console.log(props);

    const [fighter, setFighter] = useState('');
    const [ratings, setRatings] = useState('');
    
    const handleSubmit = (e) => {
            e.preventDefault();
            fetch(`${APIURL}/Ratings/`, {
                method: 'POST',
                body: JSON.stringify({fighter: fighter, fighterRatings: ratings}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization' : props.token
                })
            }) .then ((res) => res.json())
            .then((fightData) => {
                console.log(fightData);
                setFighter('');
                setRatings('');
                props.getFighters();
            })
        }

            return(
                <>
                    <h3>Rate a Fighter</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="fighter" />
                            <Input type="select" name="fighter" value={fighter} onChange={(e) => {setFighter(e.target.value); console.log(e.target.value)}}>    
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
                                </Input>
                            </FormGroup>
                        <FormGroup>
                            <Label htmlFor="ratings"/>
                            <Input name="ratings" value={ratings} onChange={(e) => setRatings(e.target.value)}/>
                        </FormGroup>    
                            <Button type="submit">Click to Submit</Button>
                        </Form>
                </>
            )
        }

    
export default FighterCreate;