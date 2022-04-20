cmake_minimum_required (VERSION 3.2)
include(FindPkgConfig)

project(example-server LANGUAGES CXX VERSION 1.0.0)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)
set(CMAKE_CXX_FLAGS_DEBUG_INIT "-g -Wall")
set(CMAKE_CXX_FLAGS_RELEASE_INIT "-Wall")
set(OPENAPI_SRC_DIR ${CMAKE_CURRENT_SOURCE_DIR}/../../lib/openapi/server-pistache)


# Check dependencies
find_package(PkgConfig)
find_package(nlohmann_json 3.2.0 REQUIRED)
pkg_check_modules(Pistache REQUIRED IMPORTED_TARGET libpistache)

include_directories(${OPENAPI_SRC_DIR}/model)
include_directories(${OPENAPI_SRC_DIR}/api)


file(GLOB_RECURSE SRCS
    ${OPENAPI_SRC_DIR}/model/*.cpp
    ${OPENAPI_SRC_DIR}/api/*.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp
)

add_executable(${PROJECT_NAME} ${SRCS})
target_link_libraries(${PROJECT_NAME} PUBLIC
                     PkgConfig::Pistache
                     nlohmann_json::nlohmann_json
                     )