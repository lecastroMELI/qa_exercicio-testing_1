Feature: GET item in 'MLA' for test
    Validate GET ITEMS_API

    Scenario: GET to items_api
        Given I have the code of an item: "MLA1137266571"
        When I send a request
        Then The response was "ok"