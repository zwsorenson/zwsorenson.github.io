---
layout: post
title: The 2014 Federal Taxpayer Receipt
categories: projects
source-thumb: '/images/logos/wh.png'
source-name: The White House
source-url: 'https://www.whitehouse.gov/2014-taxreceipt'
---

The Federal Taxpayer Receipt is simple, responsive [AngularJS](https://angularjs.org/) application displaying a customizable receipt to taxpayers, which I built from scratch while I was a White House Intern.

## Use
1. To run the site on your machine, open Terminal and navigate into the tax_receipt diretory (e.g. `cd Documents/<path>/<to>/tax_receipt`)
2. Enter the command `python -m SimpleHTTPServer`
3. You should get the response `Serving HTTP on 0.0.0.0 port 8000 ...`
4. Open a web browser and navigate to [http://localhost:8000/](http://localhost:8000/) to open the site.

## Structure
All data for the receipt is kept in the `data/budget.json` file. The application automatically generates the receipt from this data. Below is an abbreviated example of the JSON structure.

{% highlight json %}
{
	"label": "Total",
	"percent": 1,
	"categories": [
		{
			"label": "Health Care",
			"description": "Spending on Medicare Supplementary Medical Insurance and the prescription drug benefit, Medicaid, Children's Health Insurance Program, food safety, disease control and additional health care activities. Because this calculator focuses on how income taxes are spent, spending from Medicare taxes is excluded. Additionally, health care for the armed forces is included under National Defense and health care for veterans is included under Veterans Benefits. (Corresponds to budget functions 550 and 570)",
			"percent": 0.2519,
			"path": "healthcare.html",
			"categories": [
				{
					"label": "Medicaid and Children's Health Insurance Program (CHIP)",
					"percent": 0.1076
				},{
					"label": "Medicare doctor payments and prescription drug payments",
					"percent": 0.1117
				},{
					"label": "Health research and food safety",
					"percent": 0.0143
				},{
					"label": "Disease control and public health services",
					"percent": 0.0085
				},{
					"label": "Additional health care activities",
					"percent": 0.0096
				}
			]
		},{
			"label": "National Defense",
			"description": "Spending on military personnel, operations, procurement and other activities critical to our national defense. (Corresponds to budget function 050)",
			"percent": 0.2479,
			"categories": [
				{
					"label": "Military personnel salaries and benefits",
					"percent": 0.0597
				},{
					"label": "Ongoing operations, equipment, and supplies",
					"percent": 0.1016
				},{
					"label": "Research, development, weapons, and construction",
					"percent": 0.0760
				},{
					"label": "Atomic energy defense activities",
					"percent": 0.0069
				},{
					"label": "Defense-related FBI activities and additional national defense",
					"percent": 0.0037
				}
			]
		}
	]
}
{% endhighlight %}

## Calculations
Tax calculations are carried out by the `$scope.calculateReceipt` function in `js/app.js`. There are two calculation modes: precise and imprecise. Precise is used if a user has entered his or her exact tax payments and clicked the 'Calculate' button. Imprecise is used if a user has entered his or her total income and other important factors and clicked 'Estimate.'

{% highlight javascript %}
$scope.calculateReceipt = function(isPrecise, thenFn)
{
	if (isPrecise) {
		$scope.tax = angular.copy($scope.calculate);
		$scope.tax.source = 'precise';
	} else {
		var incomeTax = .1 * ($scope.estimate.income - $scope.estimate.married*2000 - $scope.estimate.children*1500);
		$scope.tax = {
			income: incomeTax,
			social: 1.1*incomeTax,
			medicare: .32*incomeTax,
			source: 'estimate'
		}
	}
	thenFn();
}
{% endhighlight %}

The following part of this function will need to be updated:

{% highlight javascript %}
var incomeTax = .1 * ($scope.estimate.income - $scope.estimate.married*2000 - $scope.estimate.children*1500);
$scope.tax = {
	income: incomeTax,
	social: 1.1*incomeTax,
	medicare: .32*incomeTax,
	source: 'estimate'
}
{% endhighlight %}
