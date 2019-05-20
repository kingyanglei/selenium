$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fristfeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:zh-CN"
    }
  ],
  "line": 3,
  "name": "登录模块",
  "description": "",
  "id": "登录模块",
  "keyword": "功能",
  "tags": [
    {
      "line": 2,
      "name": "@Automation"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "正确登录",
  "description": "",
  "id": "登录模块;正确登录",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 5,
  "name": "打开网页",
  "keyword": "当"
});
formatter.step({
  "line": 6,
  "name": "输入账号\"13592280532\"",
  "keyword": "并且"
});
formatter.step({
  "line": 7,
  "name": "输入密码\"lmm123456\"",
  "keyword": "并且"
});
formatter.step({
  "line": 8,
  "name": "点击登录按钮",
  "keyword": "当"
});
formatter.step({
  "line": 9,
  "name": "登录成功",
  "keyword": "那么"
});
formatter.match({
  "location": "MyStepdefs.打开网页()"
});
formatter.result({
  "duration": 192649100,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.steps.MyStepdefs.打开网页(MyStepdefs.java:18)\r\n\tat ✽.当打开网页(fristfeature.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "13592280532",
      "offset": 5
    }
  ],
  "location": "MyStepdefs.输入账号(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "lmm123456",
      "offset": 5
    }
  ],
  "location": "MyStepdefs.输入密码(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.点击登录按钮()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.登录成功()"
});
formatter.result({
  "status": "skipped"
});
});