/**
 * Simple Echo API
 * Echo API for testing
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator
 * (https://openapi-generator.tech). https://openapi-generator.tech Do not edit
 * the class manually.
 */

/*
 * DefaultApiImpl.h
 *
 *
 */

#ifndef DEFAULT_API_IMPL_H_
#define DEFAULT_API_IMPL_H_

#include <DefaultApi.h>
#include <pistache/endpoint.h>
#include <pistache/http.h>
#include <pistache/router.h>

#include <memory>
#include <optional>

#include "Inline_response_200.h"

namespace org::openapitools::server::api {

using namespace org::openapitools::server::model;

class DefaultApiImpl : public org::openapitools::server::api::DefaultApi {
 public:
  explicit DefaultApiImpl(const std::shared_ptr<Pistache::Rest::Router>& rtr);
  ~DefaultApiImpl() override = default;

  void echo_test_v1_ping_get(Pistache::Http::ResponseWriter& response);
};

}  // namespace org::openapitools::server::api

#endif