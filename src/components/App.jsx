import React from 'react';
import { connect } from 'react-redux';
import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm';
import Pagination from './Pagination';
import BasicLayout from './Layouts/BasicLayout';
import { Col, Row } from 'reactstrap';
import { getContacts, setCurrentLimit } from '../store/actions/contacts/getContacts';

class App extends React.Component {
  componentDidMount = () => {
    this.props.getContacts();
  };

  componentDidUpdate = prevState => {
    const { getContacts, currentLimit } = this.props;

    if (prevState.currentLimit !== currentLimit) {
      getContacts(currentLimit);
    }
  };

  render() {
    const {
      contacts,
      totalContacts,
      initialLimit,
      currentLimit,
      getContacts,
      setCurrentLimit,
      GET_CONTACTS_PENDING,
      GET_CONTACTS_ERROR,
      GET_CONTACTS_RELOADING,
      ADD_CONTACT_PENDING,
      ADD_CONTACT_ERROR,
    } = this.props;

    return (
      <BasicLayout>
        <Row>
          <Col md={4}>
            <AddContactForm
              ADD_CONTACT_PENDING={ADD_CONTACT_PENDING}
              ADD_CONTACT_ERROR={ADD_CONTACT_ERROR}
            />
          </Col>
          <Col md={8}>
            {GET_CONTACTS_PENDING ? (
              <div className="d-flex justify-content-center pt-5">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            ) : (
              GET_CONTACTS_ERROR ? (
                <p className="text-danger">Error occurred</p>
              ) : (
                <>
                  <ContactsList contacts={contacts}/>
                  {
                    GET_CONTACTS_RELOADING ? (
                      <div className="text-center p-3">
                        <i className="fas fa-spinner fa-spin"></i>
                      </div>
                    ) : (
                      totalContacts > currentLimit &&
                      <Pagination
                        getContacts={getContacts}
                        totalContacts={totalContacts}
                        initialLimit={initialLimit}
                        currentLimit={currentLimit}
                        setCurrentLimit={setCurrentLimit}
                      />
                    )
                  }
                </>
              )
            )}
          </Col>
        </Row>
      </BasicLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.addContact, ...state.getContacts
});

const mapDispatchToProps = dispatch => {
  return {
    getContacts: (limit) => dispatch(getContacts(limit)),
    setCurrentLimit: (limit) => dispatch(setCurrentLimit(limit))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);