#language: en

@consentApi
Feature: Manage customer Api
    As a Customer Api client
    Wants to add or edit consent information
    So I can manage consent information

    Scenario: Addying a new consent by Api
        Given I create a consent by API with permission 'ACCOUNTS_READ'

    Scenario: Addying a new consent by Api
        Given I created a consent and edited the status to 'AUTHORISED'
