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

  Scenario: GET to sites_api with specific characteristics
    Given I have the following attributes:
      | minPrice | maxPrice | listing_type | picking_type | condition | free_shipping | quantity | currency | category |
      |     5500 |     7000 | paid         | <logistic>   | new       | true          |        1 | ARS      | MLA3529  |
    # * I generate a data table
    When I send a request to Sites
    Then The response status code is: "OK"
    * The result is: 2
    # * The category is: "MLA3529"
   
   Examples:
      | logistic      |
      | cross_docking |

  Scenario: POST to items_api
    Given I have a sample POST body
    When I send a request to Items with the sample body
    Then The response status code is: "OK"
    * The pack_id is: 592