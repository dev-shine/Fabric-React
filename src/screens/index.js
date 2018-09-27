import React, { Component } from 'react'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import './index.css'

class Home extends Component {
    constructor () {
        super ()
        this.state = {
            isEdit: false,
            date: 12121212
        }
    }
    onChange = (e) => {
        const isEdit = this.state.isEdit
        this.setState({
            isEdit: !isEdit
        })
    }
    render () {
        return (
            <div className="home-container">    
                Office Fabric UI React
                <Toggle
                    defaultChecked={true}
                    label="Enabled and checked"
                    onText="On"
                    offText="Off"
                    onFocus={() => console.log('onFocus called')}
                    onBlur={() => console.log('onBlur called')}
                    onChange={this.onChange}
                    />
                <div>
                    { this.state.isEdit? "Edit Form" : "Create New Form"}
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
                        <SearchBox
                            placeholder="Business process"
                            onSearch={newValue => console.log('value is ' + newValue)}
                            onFocus={() => console.log('onFocus called')}
                            onBlur={() => console.log('onBlur called')}
                            onChange={() => console.log('onChange called')}
                        />
                        <SearchBox
                            placeholder="Request Type"
                            onSearch={newValue => console.log('value is ' + newValue)}
                            onFocus={() => console.log('onFocus called')}
                            onBlur={() => console.log('onBlur called')}
                            onChange={() => console.log('onChange called')}
                            disableAnimation
                        />
                        <SearchBox
                            placeholder="Sub Request Details"
                            onSearch={newValue => console.log('value is ' + newValue)}
                            onFocus={() => console.log('onFocus called')}
                            onBlur={() => console.log('onBlur called')}
                            onChange={() => console.log('onChange called')}
                            disableAnimation
                        />
                        { this.state.isEdit && <TextField label="Comment" multiline required={false} />}
                        { this.state.isEdit && <MaskedTextField value={this.state.date} label="Date" mask="99 - 99 - 9999" required={false} disabled={true}/>}
                        <PrimaryButton type="submit">Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home