import React, { Component, Fragment } from 'react'
import { Grid, GridCell } from '@rmwc/grid';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import { Switch } from '@rmwc/switch';
import { Select, SelectHelperText } from '@rmwc/select';


export default class AddCol extends Component {
    state = {
        columnDinamic: false,
        tableName: '',
        columnName: '',
        defaultValue: '',
        columns: [],
        columnsResult: '',
        sqlInput: '',
        sqlOutput: ''
    }

    addColumn = () => {
        const { columnName, defaultValue, columnDinamic, typeColumn } = this.state;
        const newColumns = [...this.state.columns, { columnName, defaultValue, columnDinamic, typeColumn }];

        this.setState({
            columnName: '',
            defaultValue: '',
            columnDinamic: false,
            columns: newColumns,
            columnsResult: newColumns.map((item) => `Column: ${item.columnName}; DefaultValue: ${item.defaultValue}; Dinamic: ${item.columnDinamic}; TypeColumn: ${typeColumn}`).join(' ')
        });
    }

    clear = () => {
        this.setState({
            columnDinamic: true,
            tableName: '',
            columnName: '',
            defaultValue: '',
            typeColumn: '',
            columns: [],
            columnsResult: '',
            sqlInput: '',
            sqlOutput: ''
        });
    }

    generateSQL = () => {
        const { tableName, columns, sqlInput } = this.state;

        const sqlBase = 'INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);';

        const arraySqlInput = sqlInput.split('\n');

        console.log(arraySqlInput)

    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <Grid>
                    <GridCell span="12">
                        <TextField label="Table Name"
                            name="tableName"
                            onChange={this.handleInputChange} value={this.state.tableName} />
                    </GridCell>
                </Grid>
                <Grid>
                    <GridCell span="3">
                        <TextField label="Col Name"
                            name="columnName"
                            onChange={this.handleInputChange} value={this.state.columnName} />
                    </GridCell>
                    <GridCell span="3">
                        <TextField label="Default value"
                            name="defaultValue"
                            disabled={this.state.columnDinamic}
                            onChange={this.handleInputChange} value={this.state.defaultValue} />
                    </GridCell>
                    <GridCell span="2">
                        <Switch
                            checked={!!this.state.columnDinamic}
                            onChange={evt => this.setState({ columnDinamic: evt.target.checked, defaultValue: evt.target.checked ? '' : this.state.defaultValue })}>
                            Column Dinamic?
                        </Switch>
                    </GridCell>
                    <GridCell span="2">
                        <Select
                            name="typeColumn"
                            label="Type Column"
                            outlined
                            options={['VARCHAR', 'NUMBER', 'DATE']}
                            onChange={this.handleInputChange}
                        />
                    </GridCell>
                    <GridCell span="1">
                        <Button raised theme="secondary-bg on-secondary" onClick={this.addColumn}>Add Column</Button>
                    </GridCell>
                    <GridCell span="1">
                        <Button raised theme="secondary-bg on-secondary" onClick={this.clear}>Clear</Button>
                    </GridCell>
                </Grid>
                <Grid>
                    <GridCell span="12">
                        <label>{this.state.columnsResult}</label>
                    </GridCell>
                </Grid>
                <Grid>
                    <GridCell span="12">
                        <TextField textarea fullwidth label="Paste your values" rows="8"
                            onChange={this.handleInputChange}
                            value={this.state.sqlInput}
                        />
                    </GridCell>
                    <GridCell span="12">
                        <Button raised theme="secondary-bg on-secondary" onClick={this.generateSQL}>Generate SQL</Button>
                    </GridCell>
                </Grid>
                <Grid>
                    <GridCell span="12">
                        <TextField textarea fullwidth label="SQL Result" rows="8"
                            value={this.state.sqlOutput} />
                    </GridCell>
                </Grid>
            </Fragment>
        )
    }
}
