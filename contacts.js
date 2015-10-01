/**
 * Manages a contact list.
 * Created by Rory on 10/1/2015.
 */

/* globals _ */
/* exported Contact, ContactList */

/**
 * Constructor for class Contact that stores information on a person.
 * @param firstName
 * @param lastName
 * @param address
 * @param zipcode
 * @param phoneNumber
 * @constructor
 */
function Contact(firstName, lastName, address, zipcode, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.phoneNumber = phoneNumber;
  var callCount = 0;

  this.call = function() {
    callCount += 1;
  };

  this.numCalls = function() {
    return callCount;
  }
}

/**
 * Constructor for ContactList
 * @constructor
 */
function ContactList() {
  var list = [];
  var contactCount = 0;

  /**
   * Adds a contact.
   * @param person A Contact object
   */
  this.addContact = function(person) {
    list[list.length] = person;
    contactCount += 1;
  };

  /**
   * Returns number of contacts in list.
   * @returns {number}
   */
  this.numContacts = function() {
    return contactCount;
  };

  /**
   * Finds Contacts with the given last name.
   * @param lastName
   * @returns {Array}
   */
  this.findContact = function(lastName) {
    var subList = [];

    for(var i = 0; i < list.length; i++) {
      if(lastName === list[i].lastName) {
        subList[subList.length] = list[i];
      }
    }
    return subList;
  };

  /**
   * Delete Contacts that match given last and first names.
   * @param firstName
   * @param lastName
   * @returns {Array}
   */
  this.deleteContact = function(firstName, lastName) {
    var newList = [];

    for(var i = 0; i < list.length; i++) {
      if(!(firstName === list[i].firstName && lastName === list[i].lastName)) {
        newList[newList.length] = list[i];
      }
    }
    return newList;
  };

  /**
   * List contacts in sorted order by last name.
   * @returns {*}
   */
  this.listContacts = function() {
    return _.sortBy(list, function(item) { return item.lastName; });
  };
}