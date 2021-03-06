/* eslint-disable */

// https://github.com/SAP-samples/xf-application-mocks/blob/master/commerce-mock/apis/couponwebservices.yaml
export default `swagger: "2.0"
info:
  description: "Coupon Webservices Version 1"
  version: "1.0.0"
  title: "Coupon API V1"
tags:
  - name: "CouponServices"
    description: "Couponservices Controller"
  - name: "CouponCodes"
    description: "Coupon Codes Controller"
basePath: "/couponwebservices"
paths:
  /couponcodes/{couponId}/{mediaCode}:
    get:
      tags:
        - "CouponCodes"
      summary: "Retrieves the generated coupon codes for a multi-code coupon given its media code."
      description: "The media code is the code attribute of the Media "
      operationId: "getGeneratedCouponCodesUsingGET"
      consumes:
        - "application/json"
      produces:
        - "application/text"
      parameters:
        - name: "couponId"
          in: "path"
          description: "the id of the multicode coupon"
          required: true
          type: "string"
        - name: "mediaCode"
          in: "path"
          description: "the code of the generated codes media"
          required: true
          type: "string"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/InputStreamResource"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/codegenerationconfiguration/get/{codeGenerationConfigurationName}:
    get:
      tags:
        - "CouponServices"
      summary: "Gets a code generation configuration"
      description: "This endpoint retrieves a single code generation configuration for a given couponId"
      operationId: "getCodeGenerationConfigurationUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "codeGenerationConfigurationName"
          in: "path"
          description: "The codeGenerationConfigurationName of the requested codeGenerationConfiguration"
          required: true
          type: "string"
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/codeGenerationConfiguration"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/codegenerationconfiguration/list:
    get:
      tags:
        - "CouponServices"
      summary: "Gets list of code generation configurations"
      description: "This endpoint retrieves all the code generation configurations that are registered in the system"
      operationId: "getCodeGenerationConfigurationsUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
        - name: "currentPage"
          in: "query"
          description: "Current page number"
          required: false
          type: "integer"
          default: 0
          format: "int32"
        - name: "pageSize"
          in: "query"
          description: "Number of items on a page"
          required: false
          type: "integer"
          default: 100
          format: "int32"
        - name: "sort"
          in: "query"
          description: "Type of sorting to be applied to the retrieved set"
          required: false
          type: "string"
          default: "asc"
          enum:
            - "asc"
            - "desc"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/codeGenerationConfigurationsSearchPage"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/multicodecoupon/create:
    post:
      tags:
        - "CouponServices"
      summary: "Creates a multi-code coupon"
      description: "This endpoint creates a new multi-code coupon given in POST body"
      operationId: "createMultiCodeCouponWsDTOUsingPOST"
      consumes:
        - "application/xml"
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - in: "body"
          name: "couponWsDTO"
          description: "Request body parameter (DTO in xml or json format)"
          required: true
          schema:
            $ref: "#/definitions/multiCodeCoupon"
      responses:
        201:
          description: "Created"
          schema:
            $ref: "#/definitions/multiCodeCoupon"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/multicodecoupon/generate/{couponId}/{batchsize}:
    put:
      tags:
        - "CouponServices"
      summary: "Generate multi-code coupon codes"
      description: "This endpoint generates a batch of the multi-code coupon codes for a provided couponId and batch size"
      operationId: "generateCouponCodesUsingPUT"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "couponId"
          in: "path"
          description: "The couponId of related multi-code coupon"
          required: true
          type: "string"
        - name: "batchsize"
          in: "path"
          description: "Batch size for generated coupons"
          required: true
          type: "integer"
          format: "int32"
      responses:
        200:
          description: "OK"
          schema:
            type: "object"
            additionalProperties:
              type: "array"
              items:
                type: "string"
        201:
          description: "Created"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/multicodecoupon/get/{couponId}:
    get:
      tags:
        - "CouponServices"
      summary: "Retrieves a multi-code coupon"
      description: "This endpoint retrieves a multi-code coupon for a given couponId"
      operationId: "getMultiCodeCouponUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "couponId"
          in: "path"
          description: "The couponId of the requested coupon"
          required: true
          type: "string"
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/multiCodeCoupon"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/multicodecoupon/list:
    get:
      tags:
        - "CouponServices"
      summary: "Returns list of multi-code coupons"
      description: "This endpoint retrieves all multi-code coupons that are registered in the system"
      operationId: "getMultiCodeCouponsUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
        - name: "currentPage"
          in: "query"
          description: "Current page number"
          required: false
          type: "integer"
          default: 0
          format: "int32"
        - name: "pageSize"
          in: "query"
          description: "Number of items on a page"
          required: false
          type: "integer"
          default: 100
          format: "int32"
        - name: "sort"
          in: "query"
          description: "Type of sorting to be applied to the retrieved set"
          required: false
          type: "string"
          default: "asc"
          enum:
            - "asc"
            - "desc"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/multiCodeCouponsSearchPage"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/multicodecoupon/update:
    put:
      tags:
        - "CouponServices"
      summary: "Updates a multi-code coupon"
      description: "This endpoint updates multi-code coupon data as provided in PUT body"
      operationId: "updateMultiCodeCouponWsDTOUsingPUT"
      consumes:
        - "application/xml"
        - "application/json"
      produces:
        - "*/*"
      parameters:
        - in: "body"
          name: "couponWsDTO"
          description: "Request body parameter (DTO in xml or json format)"
          required: true
          schema:
            $ref: "#/definitions/multiCodeCoupon"
      responses:
        201:
          description: "Created"
        204:
          description: "No Content"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/multicodecoupon/update/status:
    put:
      tags:
        - "CouponServices"
      summary: "Updates status of multi-code coupon"
      description: "This endpoint updates status of a multi-code coupon as provided in POST body"
      operationId: "updateMultiCodeStatusCouponWsDTOUsingPUT"
      consumes:
        - "application/xml"
        - "application/json"
      produces:
        - "*/*"
      parameters:
        - in: "body"
          name: "couponStatusWsDTO"
          description: "Object that contains coupon data whose status needs to be updated, such as 'couponId', 'active'"
          required: true
          schema:
            $ref: "#/definitions/couponStatus"
      responses:
        201:
          description: "Created"
        204:
          description: "No Content"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/multicodecoupon/validate/{couponCode}:
    get:
      tags:
        - "CouponServices"
      summary: "Validates a single-code coupon"
      description: "This endpoint validates a single-code coupon with a given couponId"
      operationId: "validateMultiCodeCouponUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "couponCode"
          in: "path"
          description: "The couponId of the coupon to validate"
          required: true
          type: "string"
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/couponValidationResponse"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/singlecodecoupon/create:
    post:
      tags:
        - "CouponServices"
      summary: "Creates single-code coupon entity"
      description: "This endpoint creates a new single-code coupon object with the parameters provided in POST body"
      operationId: "createSingleCodeCouponWsDTOUsingPOST"
      consumes:
        - "application/xml"
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - in: "body"
          name: "couponWsDTO"
          description: "Object that contains data about to-be-created coupon, such as 'startDate', 'endDate', 'couponId', 'name' etc"
          required: true
          schema:
            $ref: "#/definitions/singleCodeCoupon"
      responses:
        201:
          description: "Created"
          schema:
            $ref: "#/definitions/singleCodeCoupon"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/singlecodecoupon/get/{couponId}:
    get:
      tags:
        - "CouponServices"
      summary: "Gets a single-code coupon"
      description: "This endpoint retrieves a single-code coupon for a given couponId"
      operationId: "getSingleCodeCouponUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "couponId"
          in: "path"
          description: "The couponId of the requested coupon"
          required: true
          type: "string"
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/singleCodeCoupon"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/singlecodecoupon/list:
    get:
      tags:
        - "CouponServices"
      summary: "Returns list of single-code coupons"
      description: "This endpoint retrieves all of the single-code coupons that are registered in the system"
      operationId: "getSingleCodeCouponsUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
        - name: "currentPage"
          in: "query"
          description: "Current page number"
          required: false
          type: "integer"
          default: 0
          format: "int32"
        - name: "pageSize"
          in: "query"
          description: "Number of items on a page"
          required: false
          type: "integer"
          default: 100
          format: "int32"
        - name: "sort"
          in: "query"
          description: "Type of sorting to be applied to the retrieved set"
          required: false
          type: "string"
          default: "asc"
          enum:
            - "asc"
            - "desc"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/singleCodeCouponsSearchPage"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/singlecodecoupon/update:
    put:
      tags:
        - "CouponServices"
      summary: "Updates a single-code coupon"
      description: "This endpoint updates single-code coupon data as provided in PUT body"
      operationId: "updateSingleCodeCouponWsDTOUsingPUT"
      consumes:
        - "application/xml"
        - "application/json"
      produces:
        - "*/*"
      parameters:
        - in: "body"
          name: "couponWsDTO"
          description: "Request body parameter (DTO in xml or json format)"
          required: true
          schema:
            $ref: "#/definitions/singleCodeCoupon"
      responses:
        201:
          description: "Created"
        204:
          description: "No Content"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/singlecodecoupon/update/status:
    put:
      tags:
        - "CouponServices"
      summary: "Updates status of single-code coupon"
      description: "This endpoint updates status of a single-code coupon as provided in POST body"
      operationId: "updateSingleCodeStatusCouponWsDTOUsingPUT"
      consumes:
        - "application/xml"
        - "application/json"
      produces:
        - "*/*"
      parameters:
        - in: "body"
          name: "couponStatusWsDTO"
          description: "Object that contains coupon data whose status needs to be updated, such as 'couponId', 'active'"
          required: true
          schema:
            $ref: "#/definitions/couponStatus"
      responses:
        201:
          description: "Created"
        204:
          description: "No Content"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/singlecodecoupon/validate/{couponId}:
    get:
      tags:
        - "CouponServices"
      summary: "Validates a single-code coupon"
      description: "This endpoint validates a single-code coupon with a given couponId"
      operationId: "validateSingleCodeCouponUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "couponId"
          in: "path"
          description: "The couponId of the coupon to validate"
          required: true
          type: "string"
        - name: "customerId"
          in: "query"
          description: "The customerId"
          required: false
          type: "string"
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/couponValidationResponse"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /couponservices/v2/singlecodecouponredemption/get/{couponId}:
    get:
      tags:
        - "CouponServices"
      summary: "Gets redemption status for a single-code coupon"
      description: "This endpoint provides redemption status for a single-code coupon with given couponId"
      operationId: "getSingleCodeCouponRedemptionUsingGET"
      consumes:
        - "application/json"
      produces:
        - "*/*"
        - "application/text"
      parameters:
        - name: "couponId"
          in: "path"
          description: "The couponId of the requested coupon"
          required: true
          type: "string"
        - name: "customerId"
          in: "query"
          description: "The user id"
          required: true
          type: "string"
        - name: "fields"
          in: "query"
          description: "Fields to retrieve"
          required: false
          type: "string"
          default: "DEFAULT"
          enum:
            - "DEFAULT"
            - "BASIC"
            - "FULL"
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/couponRedemption"
        401:
          description: "Unauthorized"
        403:
          description: "Forbidden"
        404:
          description: "Not Found"
      security:
        - oauth2_password: []
        - oauth2_client_credentials: []
  /authorizationserver/oauth/token:
    post:
      summary: "Get OAuth2 access token"
      description: "Returns the acess token for Kyma"
      consumes:
        - "application/x-www-form-urlencoded"
      produces:
        - "application/xml"
        - "application/json"
      parameters:
        - in: "body"
          name: "parameters"
          description: "List of Component identifiers"
          required: true
          schema:
            type: "object"
            properties:
              client_id:
                type: "string"
              client_secret:
                type: "string"
              grant_type:
                type: "string"
      responses:
        200:
          description: "OK"
          schema:
            type: "object"
            properties:
              access_token_url:
                type: "string"
            default:
              token: "3333"
        404:
          description: "Not Found"
securityDefinitions:
  oauth2_client_credentials:
    type: "oauth2"
    tokenUrl: "/authorizationserver/oauth/token"
    flow: "application"
  oauth2_password:
    type: "oauth2"
    tokenUrl: "/authorizationserver/oauth/token"
    flow: "password"
definitions:
  File:
    type: "object"
    properties:
      absolute:
        type: "boolean"
      absoluteFile:
        $ref: "#/definitions/File"
      absolutePath:
        type: "string"
      canonicalFile:
        $ref: "#/definitions/File"
      canonicalPath:
        type: "string"
      directory:
        type: "boolean"
      file:
        type: "boolean"
      freeSpace:
        type: "integer"
        format: "int64"
      hidden:
        type: "boolean"
      name:
        type: "string"
      parent:
        type: "string"
      parentFile:
        $ref: "#/definitions/File"
      path:
        type: "string"
      totalSpace:
        type: "integer"
        format: "int64"
      usableSpace:
        type: "integer"
        format: "int64"
  InputStream:
    type: "object"
  InputStreamResource:
    type: "object"
    properties:
      description:
        type: "string"
      file:
        $ref: "#/definitions/File"
      filename:
        type: "string"
      inputStream:
        $ref: "#/definitions/InputStream"
      open:
        type: "boolean"
      readable:
        type: "boolean"
      uri:
        $ref: "#/definitions/URI"
      url:
        $ref: "#/definitions/URL"
  URI:
    type: "object"
    properties:
      absolute:
        type: "boolean"
      authority:
        type: "string"
      fragment:
        type: "string"
      host:
        type: "string"
      opaque:
        type: "boolean"
      path:
        type: "string"
      port:
        type: "integer"
        format: "int32"
      query:
        type: "string"
      rawAuthority:
        type: "string"
      rawFragment:
        type: "string"
      rawPath:
        type: "string"
      rawQuery:
        type: "string"
      rawSchemeSpecificPart:
        type: "string"
      rawUserInfo:
        type: "string"
      scheme:
        type: "string"
      schemeSpecificPart:
        type: "string"
      userInfo:
        type: "string"
  URL:
    type: "object"
    properties:
      authority:
        type: "string"
      content:
        type: "object"
      defaultPort:
        type: "integer"
        format: "int32"
      file:
        type: "string"
      host:
        type: "string"
      path:
        type: "string"
      port:
        type: "integer"
        format: "int32"
      protocol:
        type: "string"
      query:
        type: "string"
      ref:
        type: "string"
      userInfo:
        type: "string"
  codeGenerationConfiguration:
    type: "object"
    properties:
      codeSeparator:
        type: "string"
      couponPartCount:
        type: "integer"
        format: "int32"
      couponPartLength:
        type: "integer"
        format: "int32"
      name:
        type: "string"
    description: "Code generation configuration"
  codeGenerationConfigurationsSearchPage:
    type: "object"
    properties:
      pagination:
        $ref: "#/definitions/pagination"
      results:
        type: "array"
        description: "Result list"
        items:
          $ref: "#/definitions/codeGenerationConfiguration"
      sorts:
        type: "array"
        items:
          $ref: "#/definitions/sort"
    description: "Code generation configurations search page"
  couponGeneratedCode:
    type: "object"
    properties:
      code:
        type: "string"
      link:
        type: "string"
    description: "Coupon generated code"
  couponRedemption:
    type: "object"
    properties:
      couponId:
        type: "string"
      customerId:
        type: "string"
      maxRedemptionsLimitPerCustomer:
        type: "integer"
        format: "int32"
      maxTotalRedemptionsLimit:
        type: "integer"
        format: "int32"
      redemptionsPerCustomer:
        type: "integer"
        format: "int32"
      totalRedemptions:
        type: "integer"
        format: "int32"
    description: "Coupon redemption"
  couponStatus:
    type: "object"
    properties:
      active:
        type: "boolean"
        example: false
        description: "Coupons status"
      couponId:
        type: "string"
        description: "The coupon Id is a mandatory property"
    description: "Coupon status"
  couponValidationResponse:
    type: "object"
    properties:
      couponId:
        type: "string"
      generatedCouponCode:
        type: "string"
      message:
        type: "string"
      valid:
        type: "boolean"
        example: false
    description: "Coupon validation response"
  multiCodeCoupon:
    type: "object"
    properties:
      active:
        type: "boolean"
        example: false
        description: "Coupons status"
      codeGenerationConfiguration:
        type: "string"
        description: "Mandatory field. Represents the name of the CodeGenerationConfiguration, available in the system"
      couponCodeNumber:
        type: "integer"
        format: "int64"
        description: "Mandatory field"
      couponId:
        type: "string"
        description: "The coupon Id is a mandatory property"
      endDate:
        type: "string"
        description: "End date/time (UTC timezone) string representation in ISO-8601 format"
      generatedCodes:
        type: "array"
        description: "List of media codes containing the generated codes"
        items:
          $ref: "#/definitions/couponGeneratedCode"
      name:
        type: "string"
      startDate:
        type: "string"
        description: "Start date/time (UTC timezone) string representation in ISO-8601 format"
    description: "Multi code coupon"
  multiCodeCouponsSearchPage:
    type: "object"
    properties:
      pagination:
        $ref: "#/definitions/pagination"
      results:
        type: "array"
        description: "Result list"
        items:
          $ref: "#/definitions/multiCodeCoupon"
      sorts:
        type: "array"
        items:
          $ref: "#/definitions/sort"
    description: "Multi code coupons search page"
  pagination:
    type: "object"
    properties:
      count:
        type: "integer"
        format: "int32"
        description: "Number of elements on this page"
      page:
        type: "integer"
        format: "int32"
        description: "Current page number"
      totalCount:
        type: "integer"
        format: "int64"
        description: "Total number of elements"
      totalPages:
        type: "integer"
        format: "int32"
        description: "Total number of pages"
    description: "Pagination info"
  singleCodeCoupon:
    type: "object"
    properties:
      active:
        type: "boolean"
        example: false
        description: "Coupons status"
      couponId:
        type: "string"
        description: "The coupon Id is a mandatory property"
      endDate:
        type: "string"
        description: "End date/time (UTC timezone) string representation in ISO-8601 format"
      maxRedemptionsPerCustomer:
        type: "integer"
        format: "int32"
      maxTotalRedemptions:
        type: "integer"
        format: "int32"
      name:
        type: "string"
      startDate:
        type: "string"
        description: "Start date/time (UTC timezone) string representation in ISO-8601 format"
    description: "Single code coupon"
  singleCodeCouponsSearchPage:
    type: "object"
    properties:
      pagination:
        $ref: "#/definitions/pagination"
      results:
        type: "array"
        description: "Result list"
        items:
          $ref: "#/definitions/singleCodeCoupon"
      sorts:
        type: "array"
        items:
          $ref: "#/definitions/sort"
    description: "Single code coupons search page"
  sort:
    type: "object"
    properties:
      asc:
        type: "boolean"
        example: false
      code:
        type: "string"
    description: "Sort option"
`;
