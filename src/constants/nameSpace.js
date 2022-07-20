export const namespace = [
  {
    type: "asset",
    functions: [
      {
        name: "getAssetsFromSpaceId",
        parameters: ["assetCategory"],
        hoverContent: {
          description:
            "The getAssetsFromSpaceId function retrieves all assets from a specified space.",
          paramsType: "\n @param **`Map`** or **`List`** - record \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getAssetCategoryFields",
        parameters: ["assetCategoryId"],
        hoverContent: {
          description:
            "The getAssetCategoryFields function retrieves all fields from a specified asset category.",
          paramsType: "\n @param **`Number`** - assetCategoryId \n",
          returns: "\n Returns **`List`**",
        },
      },
    ],
  },
  {
    type: "workorder",
    functions: [
      {
        name: "getAvgResolutionTime",
        parameters: ["count", "startTime", "endTime"],
        hoverContent: {
          description:
            "The getAvgResolutionTime function takes the count, startTime and endTime(in millis) as input and returns list containing average Resolution Time By Category.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getWorkOrdersByCompletionTime",
        parameters: ["count", "startTime", "endTime"],
        hoverContent: {
          description:
            "The getWorkOrdersByCompletionTime function takes the count, startTime and endTime(in millis) as input and returns list containing the workorder completion time of sites.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTechnicians",
        parameters: ["count", "startTime", "endTime"],
        hoverContent: {
          description:
            "The getTopNTechnicians function takes the count, startTime and endTime(in millis) as input and returns list containing the technicians completed workorder high workorders.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithPlannedTypeCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithPlannedTypeCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the count of buildings with plan.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTeamsWithOpenCloseCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNTeamsWithOpenCloseCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the teams with highest open and closed workorder count.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTechWithAvgResolutionTime",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNTechWithAvgResolutionTime function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the technicians average resolution time which refers to the technician taken time for completing many workorder which is averaged and returned.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithUnPlannedTypeCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithUnPlannedTypeCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the count of unplanned buildings.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTechWithOpenCloseCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNTechWithOpenCloseCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the technicians with open and closed workorder count.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsPlannedClosedTotalWoCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsPlannedClosedTotalWoCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list of closed palnned buildings total workorder count.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithRecurringUnPlannedCountForResource",
        parameters: ["startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithRecurringUnPlannedCountForResource function takes the startTime,endTime(in millis)and siteId as input and returns list containing the buildings with unplanned count because of resource.",
          paramsType:
            "\n @param **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithUnPlannedCountForCategories",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithUnPlannedCountForCategories function takes the count,startTime,endTime(in millis)and siteId as input and returns list containing the buildings with unplanned count because of category.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
    ],
  },
  {
    type: "default",
    functions: [
      {
        name: "allMatch",
        parameters: ["listVariable"],
        hoverContent: {
          description:
            "The allMatch() function takes list as an argument and returns true if all values in that list are same, or returns false.",
          paramsType: "\n @param **`list`** - listVariable  \n",
          returns: "\n Returns **`Boolean`**",
        },
      },
      {
        name: "getMainEnergyMeter",
        parameters: ["buildingId"],
        hoverContent: {
          description:
            "The getMainEnergyMeter() function takes buildingId as an argument and returns Main energy meter ID of the building.",
          paramsType: "\n @param **`Number`** - buildingId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "convertUnit",
        parameters: ["value", "fromUnitId", "toUnitId"],
        hoverContent: {
          description:
            "The convertUnit() function takes value, fromUnit and toUnit as arguments and returns converted value.",
          paramsType:
            "\n @param **`Number`** - value, **`Number`** - fromUnitId, **`Number`** - toUnitId    \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getFilePrivateUrl",
        parameters: ["fileID"],
        hoverContent: {
          description:
            "The getFilePrivateUrl() function will generate a new unique private URL for the given fileId.",
          paramsType: "\n @param **`Number`** - fileID  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getUnit",
        parameters: ["fieldName", "moduleName"],
        hoverContent: {
          description:
            "The getUnit() function used to get display unit of the given fieldName and moduleName.",
          paramsType:
            "\n @param **`String`** - fieldName, **`String`** - moduleName   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "exportURL",
        parameters: ["URL"],
        hoverContent: {
          description: "The exportURL() function used to export an URL as PDF.",
          paramsType: "\n @param **`String`** - URL  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getOrgFileUrl",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The getOrgDownloadUrl() function is used to get Org file URL of the given fileId.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getOrgDownloadUrl",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The getOrgDownloadUrl() function is used to get download URL of the given fileId.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "encodeFileToBase64Binary",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The encodeFileToBase64Binary() function is used to get encoded file in base64 binary format of the given fileId.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getTinyUrl",
        parameters: ["URL"],
        hoverContent: {
          description:
            "The getTinyUrl() function is used to genrate short (tiny) URL from long URL.",
          paramsType: "\n @param **`String`** - URL  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getFileName",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The getFileName() function used to get file name from the file id.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "picklist",
        parameters: ["module"],
        hoverContent: {
          description:
            "The picklist() function takes module name as input and returns picklist.",
          paramsType: "\n @param **`String`** - module  \n",
          returns: "\n Returns **`Map`**",
        },
      },
      {
        name: "getUserName",
        parameters: [],
        hoverContent: {
          description:
            "The getUserName() function returns the name of the current user logged in.",
          paramsType: "\n @param    \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getUserEmail",
        parameters: [],
        hoverContent: {
          description:
            "The getUserEmail() function returns the name of the current user logged in.",
          paramsType: "\n @param    \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "mergeJson",
        parameters: ["parsedMap", "parsedMap2"],
        hoverContent: {
          description:
            "The mergeJson() function returns the merged json, it takes two json map as input.",
          paramsType:
            "\n @param **`Map`** - parsedMap, **`Map`** - parsedMap2  \n",
          returns: "\n Returns **`jsonMap`**",
        },
      },
      {
        name: "getTimeIntervals",
        parameters: ["startTime", "endTime", "seperationTime"],
        hoverContent: {
          description:
            "The getTimeIntervals() function returns the list of intervals for the given startTime and endTime, provided in what interval should the time should be splitted.",
          paramsType:
            "\n @param **`Number`** - startTime, **`Number`** - endTime, **`Number`** - seperationTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getUserNameForId",
        parameters: ["id"],
        hoverContent: {
          description:
            "The getUserNameForId() function returns the name of the given orgId.",
          paramsType: "\n @param **`Number`** - id  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "isUserInSiteScope",
        parameters: ["siteId", "assignedToId"],
        hoverContent: {
          description:
            "The isUserInSiteScope() function returns whether true or false, if the assigned user id is present inside the site .",
          paramsType:
            "\n @param **`Number`** - siteId, **`Number`** - assignedToId  \n",
          returns: "\n Returns **`Boolean`**",
        },
      },
      {
        name: "getLatLngForSite",
        parameters: ["siteId"],
        hoverContent: {
          description:
            "The getLatLngForSite() function returns the url containing latitude and longitude of the site for given siteId.",
          paramsType: "\n @param **`Number`** - siteId \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "encodeUrl",
        parameters: ["url"],
        hoverContent: {
          description:
            "The encodeUrl() function returns the utf-8 encode url for the given url as input.",
          paramsType: "\n @param **`String`** - url \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "exportURLAsFile",
        parameters: ["url"],
        hoverContent: {
          description:
            "The exportURLAsFile() function takes url as input and returns the file id",
          paramsType: "\n @param **`String`** - url \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "tagAssetAsRotating",
        parameters: ["assetId"],
        hoverContent: {
          description:
            "The tagAssetAsRotating() function takes the asset id as input, for which the tag is set as rotating.",
          paramsType: "\n @param **`Number`** - assetId \n",
          returns: "\n Returns **`Void`**",
        },
      },
      {
        name: "updateStatus",
        parameters: ["record", "moduleName", "statusName"],
        hoverContent: {
          description:
            "The updateStatus() function takes the record, module name and status name as input and updates the status of that record.",
          paramsType:
            "\n @param **`Map`** - record, **`String`** - moduleName, **`String`** - statusName  \n",
          returns: "\n Returns **`Void`**",
        },
      },
      {
        name: "getDelegations",
        parameters: [],
        hoverContent: {
          description:
            "getDelegation function returns the list of assigned delegation.",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getBlobFile",
        parameters: ["url", "headers", "params", "fileName", "assetId"],
        hoverContent: {
          description:
            "The getBlobFile function hits the url,gets the file and saves the file and returns the fileId.",
          paramsType:
            "\n @param **`String`** - url, **`Map`** - headers, **`Map`** - params, **`String`** - fileName, **`String`** - assetId   \n",
          returns: "\n Returns **`Number`**",
        },
      },
    ],
  },
  {
    type: "module",
    functions: [
      {
        name: "getModule",
        parameters: ["moduleName"],
        hoverContent: {
          description:
            "The getModule function retrieves module object from a specified module.",
          paramsType: "\n @param **`String`** - moduleName  \n",
          returns: "\n Returns **`Module`**",
        },
      },
      {
        name: "getField",
        parameters: ["fieldName", "moduleName"],
        hoverContent: {
          description:
            "The getField function retrieves field object from a specified module and field.",
          paramsType:
            "\n @param **`String`** - fieldName, **`String`** - moduleName  \n",
          returns: "\n Returns **`Field`**",
        },
      },
      {
        name: "getEnumFieldValue",
        parameters: ["picklist", "moduleName", "index"],
        hoverContent: {
          description:
            "The getEnumFieldValue function retrieves field value from a specified module and picklist field name and its index. Note it wil not retrieve lookup field values.",
          paramsType:
            "\n @param **`String`** - picklist, **`String`** - moduleName,  **`Number`** - index  \n",
          returns: "\n Returns **`Field`**",
        },
      },
    ],
  },
  {
    type: "readings",
    functions: [
      {
        name: "getAllReadingFieldsForAssetCategory",
        parameters: ["assetCategory"],
        hoverContent: {
          description:
            "The getAllReadingFieldsForAssetCategory function retrieves all reading fields from a specified asset category.",
          paramsType: "\n @param **`String`** - assetCategory  \n",
          returns: "\n Returns **`Map`**",
        },
      },
      {
        name: "getAllReadingFieldsForSpaceCategory",
        parameters: ["spaceCategory"],
        hoverContent: {
          description:
            "The getAllReadingFieldsForSpaceCategory function retrieves all reading fields from a specified space category.",
          paramsType: "\n @param **`String`** - spaceCategory  \n",
          returns: "\n Returns **`Map`**",
        },
      },
    ],
  },
  {
    type: "notification",
    functions: [
      {
        name: "sendMail",
        parameters: ["emailParams"],
        hoverContent: {
          description:
            "The send mail function when executed sends an email to the specified recipients.",
          paramsType: "\n @param **`Map`** - emailParams  \n",
          returns: "\n Returns **`Void`**",
        },
      },
      {
        name: "sendSms",
        parameters: ["smsParams"],
        hoverContent: {
          description:
            "The send sms function when executed sends an message to the specified recipient phone number.",
          paramsType: "\n @param **`Map`** - smsParams  \n",
          returns: "\n Returns **`Void`**",
        },
      },
      {
        name: "sendNotification",
        parameters: ["userId", "notificationParams"],
        hoverContent: {
          description:
            "This function is used to send push notifications to your users. For example, send notifications whenever a new record is added. There are two examples shown below one with mandatory parameters and other example including optional parameters.",
          paramsType:
            "\n @param **`Number`** - userId, **`Map`** - notificationParams  \n",
          returns: "\n Returns **`Void`**",
        },
      },
      {
        name: "makeCall",
        parameters: ["voiceCallParams"],
        hoverContent: {
          description:
            "The makeCall function when executed sends an voice call to the specified recipient phone number.",
          paramsType: "\n @param **`Map`** - voiceCallParams  \n",
          returns: "\n Returns **`Void`**",
        },
      },
    ],
  },
  {
    type: "math",
    functions: [
      {
        name: "abs",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The abs() function takes a numberValue as an argument, and returns the absolute value of that number, i.e., the number without a sign.",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "ceil",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The ceil() function takes a numberValue as an argument, and returns the nearest largest integer to the given decimal value.",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "floor",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The floor() function takes a numberValue as an argument, and returns the nearest smallest integer to the given decimal value.",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "pow",
        parameters: ["baseNumber", "powerNumber"],
        hoverContent: {
          description:
            "The power() function takes baseNumber and powerNumber as arguments. It returns the baseNumber raised to the power of powerNumber.",
          paramsType:
            "\n @param **`Number`** - baseNumber, **`Number`** - powerNumber   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "cbrt",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The cbrt() function takes a number as an argument, and returns the cube root of that number.",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "sqrt",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The sqrt() function takes a number as an argument, and returns the square root of that number.",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "random",
        parameters: ["maxLimit"],
        hoverContent: {
          description:
            "The random() function generates a random number from the specified range.",
          paramsType: "\n @param **`Number`** - maxLimit  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "setPrecision",
        parameters: ["numberValue", "precisionValue"],
        hoverContent: {
          description:
            "The setPrecision() function takes a numberValue and precisionValue as an argument, and returns the specified number of decimals.",
          paramsType:
            "\n @param **`Number`** - numberValue, **`Number`** - precisionValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "setPrecisionWithCeiling",
        parameters: ["numberValue", "precisionValue"],
        hoverContent: {
          description:
            "The setPrecisionWithCeiling() function takes a numberValue and precisionValue as an argument, and returns the specified number of decimals which will be the nearest largest integer to the given decimal value, since precision is done along with ceiling.",
          paramsType:
            "\n @param **`Number`** - numberValue, **`Number`** - precisionValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "exp",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The exp() function takes number as an argument, which rises to the power e (e is the Euler's number whose value is 2.71828) and it returns e pow numberValue for the argument numberValue.",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "ln",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The ln() method computes the natural logarithm (base e) of the specified value, which takes numberValue as input and returns the natural logarithmic numberValue.",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getLog",
        parameters: ["numberValue"],
        hoverContent: {
          description:
            "The log() function takes numberValue as an argument, returns base 10 logarithm of numberValue",
          paramsType: "\n @param **`Number`** - numberValue  \n",
          returns: "\n Returns **`Number`**",
        },
      },
    ],
  },
  {
    type: "http",
    functions: [
      {
        name: "get",
        parameters: ["url", "paramsMap", "headerMap"],
        hoverContent: {
          description:
            "The get function corresponds to a HTTP GET request. It is normally supported by services to perform a read operation like fetching data.",
          paramsType:
            "\n @param **`String`** - url, **`Map`** - paramsMap, **`Map`** - headerMap   \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "post",
        parameters: ["url", "paramsMap", "headerMap", "body"],
        hoverContent: {
          description:
            "The post url task corresponds to a HTTP POST request. It is normally supported by services to perform write operation like adding or updating data.",
          paramsType:
            "\n @param **`String`** - url, **`Map`** - paramsMap, **`Map`** - headerMap, **`String`** - body   \n",
          returns: "\n Returns **`String`**",
        },
      },
    ],
  },
  {
    type: "connectedApp",
    functions: [
      {
        name: "getVariable",
        parameters: ["connectedAppName", "variableName"],
        hoverContent: {
          description:
            "The getVariable function takes already created connectedApp name and the variable inside the connectedAPP as input and returns the value of that variable.",
          paramsType:
            "\n @param **`String`** - connectedAppName, **`String`** - variableName   \n",
          returns: "\n Returns **`String`**",
        },
      },
    ],
  },
  {
    type: "date",
    functions: [
      {
        name: "now",
        parameters: [],
        hoverContent: {
          description:
            "The now() function returns the current time value in milliseconds.",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getFormattedTime",
        parameters: ["time", "format"],
        hoverContent: {
          description:
            "The getFormattedTime() takes time (in milliseconds format) and format as arguments and returns formatted date/time in the specified format.",
          paramsType:
            "\n @param **`Number`** - time, **`String`** - format  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getCurrentHour",
        parameters: [],
        hoverContent: {
          description:
            "The getCurrentHour() functions returns the current time hour",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getCurrentDate",
        parameters: [],
        hoverContent: {
          description:
            "The getCurrentDate() functions returns the current date",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getCurrentDay",
        parameters: [],
        hoverContent: {
          description:
            "The getCurrentDay() functions returns the current Day in number",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getCurrentMonth",
        parameters: [],
        hoverContent: {
          description:
            "The getCurrentMonth() functions returns the current Month",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getCurrentYear",
        parameters: [],
        hoverContent: {
          description:
            "The getCurrentYear() functions returns the current Year",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getCurrentMonthDays",
        parameters: [],
        hoverContent: {
          description:
            "Get number of days in a current month or specified month.",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "addSeconds",
        parameters: ["time", "count"],
        hoverContent: {
          description:
            "The addSecondsfunction takes a date-time or time value and count as arguments. It returns the date-time or time value after adding the specified number of seconds to it.",
          paramsType: "\n @param **`Number`** - time, **`Number`** - count  \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "addMinutes",
        parameters: ["time", "count"],
        hoverContent: {
          description:
            "The addMinutes function takes a date-time or Count and numberOfMins as arguments. It returns the date-time or time value after adding the specified number of minutes to it.",
          paramsType: "\n @param **`Number`** - time, **`Number`** - count  \n",
          returns: "\n Returns **`Number`**",
        },
      },
    ],
  },
  {
    type: "number",
  },
  {
    type: "resource",
  },
  {
    type: "field",
  },
  {
    type: "file",
  },
  {
    type: "xml",
  },
  {
    type: "businessHours",
  },
  {
    type: "control",
  },
  {
    type: "criteria",
  },
];
