Feature: GET item in 'MLA' for test
    Validate GET ITEMS_API

    Scenario: GET to items_api
        Given I have the code of an item: "MLA1137266571"
        When I send a request
        Then The response status code is: "OK"

    Scenario: GET to items_api and validate specific parameters
        Given I have the code of an item: "MLA1137266571"
        When I send a request
        Then The response status code is: "OK"
        * The seller_id is: 1117425372
        * The category_id is: "MLA401316"