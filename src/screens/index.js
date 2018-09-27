import React, { Component } from 'react'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

import './index.css'

class Home extends Component {
    render () {
        return (
            <div className="home-container">    
                Office Fabric UI React
                <Fabric>
                    <form>
                        <TextField label="Requester Name" required={true} disabled={true} />
                        <MaskedTextField label="Phone" mask="(999) 999 - 9999" required={true} disabled={true}/>
                        <TextField label="Department " required={true} disabled={true}/>
                        <MaskedTextField label="Date" mask="99 - 99 - 9999" required={true} disabled={true}/>
                        <TextField label="Email " type="email" required={true} disabled={true}/>
                        <TextField label="Additional Details" multiline required={true} />
                        <TextField label="Material Number:" type="number" underlined required={true} />
                        <TextField label="Quantity" type="number" required={true} />
                        <TextField label="Justification" multiline required={true} />
                        <div>
                            <ChoiceGroup
                            defaultSelectedKey="high"
                            options={[
                                {
                                key: 'critical',
                                text: 'Critical',
                                'data-automation-id': 'auto1'
                                },
                                {
                                key: 'high',
                                text: 'High'
                                },
                                {
                                key: 'medium',
                                text: 'Medium',
                                disabled: true
                                },
                                {
                                key: 'low',
                                text: 'Low',
                                disabled: true
                                }
                            ]}
                            onChange={this._onChange}
                            label="Urgency"
                            required={true}
                            />
                        </div>
                        <TextField label="Remark" multiline required={true} />
                        <PrimaryButton type="submit">Submit</PrimaryButton>
                    </form>
                </Fabric>
            </div>
        )
    }
}

export default Home