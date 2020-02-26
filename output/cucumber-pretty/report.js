$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/cherup.feature");
formatter.feature({
  "line": 2,
  "name": "Testing features running",
  "description": "",
  "id": "testing-features-running",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Outline changed the name",
  "description": "",
  "id": "testing-features-running;outline-changed-the-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"\u003ckeyword\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "testing-features-running;outline-changed-the-name;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 11,
      "id": "testing-features-running;outline-changed-the-name;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 12,
      "id": "testing-features-running;outline-changed-the-name;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 13,
      "id": "testing-features-running;outline-changed-the-name;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 14,
      "id": "testing-features-running;outline-changed-the-name;;4"
    },
    {
      "cells": [
        "kubernetes"
      ],
      "line": 15,
      "id": "testing-features-running;outline-changed-the-name;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1057423335,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Outline changed the name",
  "description": "",
  "id": "testing-features-running;outline-changed-the-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 897965029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1520722384,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 245758251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 151794508,
  "status": "passed"
});
formatter.after({
  "duration": 67092131,
  "status": "passed"
});
formatter.before({
  "duration": 570190082,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Outline changed the name",
  "description": "",
  "id": "testing-features-running;outline-changed-the-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 677692849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1333199124,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 263931169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 220981272,
  "status": "passed"
});
formatter.after({
  "duration": 71522008,
  "status": "passed"
});
formatter.before({
  "duration": 616835833,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Outline changed the name",
  "description": "",
  "id": "testing-features-running;outline-changed-the-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 645099621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1396554394,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 276824100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 120120700,
  "status": "passed"
});
formatter.after({
  "duration": 62047964,
  "status": "passed"
});
formatter.before({
  "duration": 522612041,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Outline changed the name",
  "description": "",
  "id": "testing-features-running;outline-changed-the-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"kubernetes\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 710584562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubernetes",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1960999476,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 263292980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 137032347,
  "status": "passed"
});
formatter.after({
  "duration": 70913123,
  "status": "passed"
});
formatter.uri("features/serach.feature");
formatter.feature({
  "line": 2,
  "name": "Sai Test search",
  "description": "",
  "id": "sai-test-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "sai scenario1",
  "description": "",
  "id": "sai-test-search;sai-scenario1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"\u003ckeyword\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sai-test-search;sai-scenario1;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 11,
      "id": "sai-test-search;sai-scenario1;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 12,
      "id": "sai-test-search;sai-scenario1;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 13,
      "id": "sai-test-search;sai-scenario1;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 14,
      "id": "sai-test-search;sai-scenario1;;4"
    },
    {
      "cells": [
        "kubernetes"
      ],
      "line": 15,
      "id": "sai-test-search;sai-scenario1;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 626061483,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "sai scenario1",
  "description": "",
  "id": "sai-test-search;sai-scenario1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 767744122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1309560606,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 240107452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 127765282,
  "status": "passed"
});
formatter.after({
  "duration": 59285560,
  "status": "passed"
});
formatter.before({
  "duration": 577864163,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "sai scenario1",
  "description": "",
  "id": "sai-test-search;sai-scenario1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 698846135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1304597123,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 228562057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 120072727,
  "status": "passed"
});
formatter.after({
  "duration": 70918393,
  "status": "passed"
});
formatter.before({
  "duration": 573375770,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "sai scenario1",
  "description": "",
  "id": "sai-test-search;sai-scenario1;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 685836609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1471652543,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 279566576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 262962199,
  "status": "passed"
});
formatter.after({
  "duration": 66441514,
  "status": "passed"
});
formatter.before({
  "duration": 617174545,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "sai scenario1",
  "description": "",
  "id": "sai-test-search;sai-scenario1;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"kubernetes\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 677945325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubernetes",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1373062171,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 311261734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 234363464,
  "status": "passed"
});
formatter.after({
  "duration": 77376668,
  "status": "passed"
});
formatter.uri("features/serach2.feature");
formatter.feature({
  "line": 2,
  "name": "Sai Test search",
  "description": "",
  "id": "sai-test-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "sai scenario2",
  "description": "",
  "id": "sai-test-search;sai-scenario2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"\u003ckeyword\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sai-test-search;sai-scenario2;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 11,
      "id": "sai-test-search;sai-scenario2;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 12,
      "id": "sai-test-search;sai-scenario2;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 13,
      "id": "sai-test-search;sai-scenario2;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 14,
      "id": "sai-test-search;sai-scenario2;;4"
    },
    {
      "cells": [
        "kubernetes"
      ],
      "line": 15,
      "id": "sai-test-search;sai-scenario2;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 619995519,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "sai scenario2",
  "description": "",
  "id": "sai-test-search;sai-scenario2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 728853662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 2963080939,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 221380009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 125761752,
  "status": "passed"
});
formatter.after({
  "duration": 65306486,
  "status": "passed"
});
formatter.before({
  "duration": 562783073,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "sai scenario2",
  "description": "",
  "id": "sai-test-search;sai-scenario2;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 661685456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1277052157,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 246439703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 119834558,
  "status": "passed"
});
formatter.after({
  "duration": 62455688,
  "status": "passed"
});
formatter.before({
  "duration": 556803918,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "sai scenario2",
  "description": "",
  "id": "sai-test-search;sai-scenario2;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 695336614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1366084461,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 236470590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 115939335,
  "status": "passed"
});
formatter.after({
  "duration": 59764620,
  "status": "passed"
});
formatter.before({
  "duration": 511222549,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "sai scenario2",
  "description": "",
  "id": "sai-test-search;sai-scenario2;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"kubernetes\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 708048253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubernetes",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1729591560,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 247144461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 204692652,
  "status": "passed"
});
formatter.after({
  "duration": 62040962,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "sai scenario4",
  "description": "",
  "id": "sai-test-search;sai-scenario4",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter the \"\u003ckeyword\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "sai-test-search;sai-scenario4;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 24,
      "id": "sai-test-search;sai-scenario4;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 25,
      "id": "sai-test-search;sai-scenario4;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 26,
      "id": "sai-test-search;sai-scenario4;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 27,
      "id": "sai-test-search;sai-scenario4;;4"
    },
    {
      "cells": [
        "kubernetes"
      ],
      "line": 28,
      "id": "sai-test-search;sai-scenario4;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 555864831,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "sai scenario4",
  "description": "",
  "id": "sai-test-search;sai-scenario4;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 707382292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1242001398,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 275994124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 117667143,
  "status": "passed"
});
formatter.after({
  "duration": 59031245,
  "status": "passed"
});
formatter.before({
  "duration": 592397970,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "sai scenario4",
  "description": "",
  "id": "sai-test-search;sai-scenario4;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 753185918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1696822827,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 385462376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 286732092,
  "status": "passed"
});
formatter.after({
  "duration": 63133351,
  "status": "passed"
});
formatter.before({
  "duration": 718330526,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "sai scenario4",
  "description": "",
  "id": "sai-test-search;sai-scenario4;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 744935651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1520692533,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 244874422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 106039168,
  "status": "passed"
});
formatter.after({
  "duration": 66985131,
  "status": "passed"
});
formatter.before({
  "duration": 603285173,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "sai scenario4",
  "description": "",
  "id": "sai-test-search;sai-scenario4;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter the \"kubernetes\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 702243612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubernetes",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 1443236937,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 260415240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 169543706,
  "status": "passed"
});
formatter.after({
  "duration": 77849202,
  "status": "passed"
});
});