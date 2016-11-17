import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import Collapse from "react-collapse";
import "./style.less";
import { CheckMarkIcon, EditIcon, TrashIcon } from "dnn-svg-icons";

class SynonymsGroupRow extends Component {
    componentWillMount() {
        let opened = (this.props.openId !== "" && this.props.id === this.props.openId);
        this.setState({
            opened
        });
    }

    toggle() {
        if ((this.props.openId !== "" && this.props.id === this.props.openId)) {
            //this.props.Collapse();
        }
        else {
            this.props.OpenCollapse(this.props.id);
        }
    }    

    /* eslint-disable react/no-danger */
    render() {
        const {props, state} = this;
        let opened = (this.props.openId !== "" && this.props.id === this.props.openId);
        return (
            <div className={"collapsible-component-synonyms"}>
                <div className={"collapsible-header-synonyms " + !opened} >
                    <div className={"row"}>
                        <div className="synonyms-item item-row-tags">
                            {props.tags}</div>                        
                        <div className="synonyms-item item-row-editButton">
                            <div className={opened ? "delete-icon-hidden" : "delete-icon"} dangerouslySetInnerHTML={{ __html: TrashIcon }} onClick={props.onDelete.bind(this)}></div>
                            <div className={opened ? "edit-icon-active" : "edit-icon"} dangerouslySetInnerHTML={{ __html: EditIcon }} onClick={this.toggle.bind(this)}></div>
                        </div>
                    </div>
                </div>
                <Collapse isOpened={opened} style={{ float: "left", width: "100%" }}>{opened && props.children}</Collapse>
            </div>
        );
    }
}

SynonymsGroupRow.propTypes = {
    groupId: PropTypes.number,
    tags: PropTypes.string,
    OpenCollapse: PropTypes.func,
    Collapse: PropTypes.func,
    onDelete: PropTypes.func,
    id: PropTypes.string,
    openId: PropTypes.string
};

SynonymsGroupRow.defaultProps = {
    collapsed: true
};
export default (SynonymsGroupRow);
