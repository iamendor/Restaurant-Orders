# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Address](#address)
    * [Analytics](#analytics)
    * [AnalyticsSummary](#analyticssummary)
    * [AuthRestaurant](#authrestaurant)
    * [AuthWaiter](#authwaiter)
    * [BaseTask](#basetask)
    * [Category](#category)
    * [Currency](#currency)
    * [Income](#income)
    * [IncomeRange](#incomerange)
    * [IncomeSummary](#incomesummary)
    * [ListenOrder](#listenorder)
    * [Meal](#meal)
    * [OpenHour](#openhour)
    * [Order](#order)
    * [PopularProduct](#popularproduct)
    * [PopularProductSummary](#popularproductsummary)
    * [Product](#product)
    * [Restaurant](#restaurant)
    * [Settings](#settings)
    * [Subscription](#subscription)
    * [Success](#success)
    * [Table](#table)
    * [Task](#task)
    * [Waiter](#waiter)
    * [WaiterOfTheDay](#waiteroftheday)
    * [WaiterOfTheDaySummary](#waiterofthedaysummary)
  * [Inputs](#inputs)
    * [AnalyticsFilter](#analyticsfilter)
    * [CategoryFilter](#categoryfilter)
    * [CreateAddress](#createaddress)
    * [CreateCategory](#createcategory)
    * [CreateMeal](#createmeal)
    * [CreateOpenHour](#createopenhour)
    * [CreateOrder](#createorder)
    * [CreateProduct](#createproduct)
    * [CreateRestaurant](#createrestaurant)
    * [CreateTable](#createtable)
    * [CreateWaiter](#createwaiter)
    * [LoginRestaurant](#loginrestaurant)
    * [LoginWaiter](#loginwaiter)
    * [MealFilter](#mealfilter)
    * [OrderFilter](#orderfilter)
    * [ProductFilter](#productfilter)
    * [TableFilter](#tablefilter)
    * [TaskFilter](#taskfilter)
    * [UpdateAddress](#updateaddress)
    * [UpdateCategory](#updatecategory)
    * [UpdateCategoryData](#updatecategorydata)
    * [UpdateOpenHour](#updateopenhour)
    * [UpdateOpenHourData](#updateopenhourdata)
    * [UpdateOrder](#updateorder)
    * [UpdateOrderData](#updateorderdata)
    * [UpdateProduct](#updateproduct)
    * [UpdateProductData](#updateproductdata)
    * [UpdateRestaurant](#updaterestaurant)
    * [UpdateRestaurantPassword](#updaterestaurantpassword)
    * [UpdateSettings](#updatesettings)
    * [UpdateTable](#updatetable)
    * [UpdateTableData](#updatetabledata)
    * [UpdateWaiter](#updatewaiter)
    * [UpdateWaiterData](#updatewaiterdata)
    * [UpdateWaiterPassword](#updatewaiterpassword)
    * [UpdateWaiterPasswordData](#updatewaiterpassworddata)
    * [WaiterFilter](#waiterfilter)
    * [WhereCategory](#wherecategory)
    * [WhereCurrency](#wherecurrency)
    * [WhereMeal](#wheremeal)
    * [WhereOpenHour](#whereopenhour)
    * [WhereOrder](#whereorder)
    * [WhereProduct](#whereproduct)
    * [WhereTable](#wheretable)
    * [WhereWaiter](#wherewaiter)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Date](#date)
    * [DateTime](#datetime)
    * [Float](#float)
    * [String](#string)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>analytics</strong></td>
<td valign="top">[<a href="#analytics">Analytics</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#analyticsfilter">AnalyticsFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>analyticsSummary</strong></td>
<td valign="top"><a href="#analyticssummary">AnalyticsSummary</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">range</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#category">Category</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#categoryfilter">CategoryFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#wherecategory">WhereCategory</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>listCurrencies</strong></td>
<td valign="top">[<a href="#currency">Currency</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>listTasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#taskfilter">TaskFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meal</strong></td>
<td valign="top"><a href="#meal">Meal</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#wheremeal">WhereMeal</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meals</strong></td>
<td valign="top">[<a href="#meal">Meal</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#mealfilter">MealFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>openHours</strong></td>
<td valign="top">[<a href="#openhour">OpenHour</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#whereorder">WhereOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top">[<a href="#order">Order</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#orderfilter">OrderFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#whereproduct">WhereProduct</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#productfilter">ProductFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantInfo</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>table</strong></td>
<td valign="top"><a href="#table">Table</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#wheretable">WhereTable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tables</strong></td>
<td valign="top">[<a href="#table">Table</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#tablefilter">TableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiterInfo</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#wherewaiter">WhereWaiter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiters</strong></td>
<td valign="top">[<a href="#waiter">Waiter</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#waiterfilter">WaiterFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createCategories</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top">[<a href="#createcategory">CreateCategory</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createCategory</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createcategory">CreateCategory</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMeal</strong></td>
<td valign="top"><a href="#meal">Meal</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createmeal">CreateMeal</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createOpenHour</strong></td>
<td valign="top"><a href="#openhour">OpenHour</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createopenhour">CreateOpenHour</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createOpenHours</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top">[<a href="#createopenhour">CreateOpenHour</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createOrder</strong></td>
<td valign="top"><a href="#order">Order</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createorder">CreateOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createOrders</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top">[<a href="#createorder">CreateOrder</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createProduct</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createproduct">CreateProduct</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createProducts</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top">[<a href="#createproduct">CreateProduct</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTable</strong></td>
<td valign="top"><a href="#table">Table</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createtable">CreateTable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTables</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top">[<a href="#createtable">CreateTable</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createWaiter</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createwaiter">CreateWaiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCategory</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#wherecategory">WhereCategory</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteOpenHour</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#whereopenhour">WhereOpenHour</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteOrder</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#whereorder">WhereOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProduct</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#whereproduct">WhereProduct</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRestaurant</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTable</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#wheretable">WhereTable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteWaiter</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#wherewaiter">WhereWaiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginRestaurant</strong></td>
<td valign="top"><a href="#authrestaurant">AuthRestaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">credentials</td>
<td valign="top"><a href="#loginrestaurant">LoginRestaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginWaiter</strong></td>
<td valign="top"><a href="#authwaiter">AuthWaiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">credentials</td>
<td valign="top"><a href="#loginwaiter">LoginWaiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signup</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createrestaurant">CreateRestaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCategory</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#updatecategory">UpdateCategory</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateOpenHour</strong></td>
<td valign="top"><a href="#openhour">OpenHour</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#updateopenhour">UpdateOpenHour</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateOrder</strong></td>
<td valign="top"><a href="#order">Order</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#updateorder">UpdateOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProduct</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#updateproduct">UpdateProduct</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateRestaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#updaterestaurant">UpdateRestaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateRestaurantPassword</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#updaterestaurantpassword">UpdateRestaurantPassword</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTable</strong></td>
<td valign="top"><a href="#table">Table</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#updatetable">UpdateTable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateWaiter</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#updatewaiter">UpdateWaiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateWaiterPassword</strong></td>
<td valign="top"><a href="#success">Success</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#updatewaiterpassword">UpdateWaiterPassword</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### Address

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address1</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The first line of address

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The second line of address(optional)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

City

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Country

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zip</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Zip code

</td>
</tr>
</tbody>
</table>

### Analytics

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>income</strong></td>
<td valign="top"><a href="#income">Income</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularProduct</strong></td>
<td valign="top"><a href="#popularproduct">PopularProduct</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiterOfTheDay</strong></td>
<td valign="top"><a href="#waiteroftheday">WaiterOfTheDay</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AnalyticsSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>income</strong></td>
<td valign="top"><a href="#incomesummary">IncomeSummary</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularProduct</strong></td>
<td valign="top"><a href="#popularproductsummary">PopularProductSummary</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>range</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The range of the summary

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiter</strong></td>
<td valign="top"><a href="#waiterofthedaysummary">WaiterOfTheDaySummary</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AuthRestaurant

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>access_token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The JWT token for authorization

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expiresAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td>

The JWT token expiration time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AuthWaiter

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>access_token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The JWT token for authorization

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expiresAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td>

The JWT token expiration time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiter</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### BaseTask

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
</tbody>
</table>

### Category

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>level</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The level of the category

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>root</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subCategories</strong></td>
<td valign="top">[<a href="#category">Category</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Currency

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

This is only used inside api, always returns null!

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>symbol</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Symbol

</td>
</tr>
</tbody>
</table>

### Income

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The total made

</td>
</tr>
</tbody>
</table>

### IncomeRange

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bottom</strong></td>
<td valign="top"><a href="#income">Income</a></td>
<td>

The lowest income

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>top</strong></td>
<td valign="top"><a href="#income">Income</a></td>
<td>

The highest income

</td>
</tr>
</tbody>
</table>

### IncomeSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The average of the incomes

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>median</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The median of the incomes

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>range</strong></td>
<td valign="top"><a href="#incomerange">IncomeRange</a>!</td>
<td>

The highest and lowest income

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The total made at the date

</td>
</tr>
</tbody>
</table>

### ListenOrder

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>closed</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Returns true if it is closed and added to meal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Additonal description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReady</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

The order's status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Quantity

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>table</strong></td>
<td valign="top"><a href="#table">Table</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiter</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiterId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Meal

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td>

The last order's date created in the meal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top">[<a href="#order">Order</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td>

The first order's date created in the meal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>table</strong></td>
<td valign="top"><a href="#table">Table</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The total income of the meal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiter</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### OpenHour

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The end of the shift

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The day of the opening hour

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a></td>
<td>

The restaurant of the opening hour

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The start of the shift

</td>
</tr>
</tbody>
</table>

### Order

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>closed</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Returns true if it is closed and added to meal

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Additonal description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReady</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

The order's status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Quantity

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>table</strong></td>
<td valign="top"><a href="#table">Table</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiter</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiterId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PopularProduct

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberOne</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberThree</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberTwo</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### PopularProductSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>toplist</strong></td>
<td valign="top"><a href="#popularproduct">PopularProduct</a>!</td>
<td>

Toplist of the popular products

</td>
</tr>
</tbody>
</table>

### Product

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top">[<a href="#order">Order</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Restaurant

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#category">Category</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#currency">Currency</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currencyId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meals</strong></td>
<td valign="top">[<a href="#meal">Meal</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>open</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top">[<a href="#order">Order</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>settings</strong></td>
<td valign="top"><a href="#settings">Settings</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tables</strong></td>
<td valign="top">[<a href="#table">Table</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiters</strong></td>
<td valign="top">[<a href="#waiter">Waiter</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Settings

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>enableAnalytics</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Enable analytics

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Subscription

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>listenOrders</strong></td>
<td valign="top">[<a href="#listenorder">ListenOrder</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Success

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Table

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top">[<a href="#order">Order</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Task

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>base</strong></td>
<td valign="top"><a href="#basetask">BaseTask</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>done</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Returns if task is done

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Waiter

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Gender

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meals</strong></td>
<td valign="top">[<a href="#meal">Meal</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top">[<a href="#order">Order</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileIcon</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Profile icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurant</strong></td>
<td valign="top"><a href="#restaurant">Restaurant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WaiterOfTheDay

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiter</strong></td>
<td valign="top"><a href="#waiter">Waiter</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiterId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### WaiterOfTheDaySummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>best</strong></td>
<td valign="top"><a href="#waiter">Waiter</a></td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### AnalyticsFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Exclude data created before the date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Exclude data created later the date

</td>
</tr>
</tbody>
</table>

### CategoryFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Add max length of list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Use it for searching by name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>root</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Check if category is a root category(or not)

</td>
</tr>
</tbody>
</table>

### CreateAddress

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address1</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The first line of address

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The second line of address(optional)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

City

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Country

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zip</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Zip code

</td>
</tr>
</tbody>
</table>

### CreateCategory

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>level</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateMeal

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tableId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateOpenHour

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The end of the shift

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The day of the opening hour

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The start of the shift

</td>
</tr>
</tbody>
</table>

### CreateOrder

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReady</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tableId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>waiterId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateProduct

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>categoryId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateRestaurant

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#createaddress">CreateAddress</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#wherecurrency">WhereCurrency</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currencyId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateTable

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateWaiter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Gender

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileIcon</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Profile icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### LoginRestaurant

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### LoginWaiter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MealFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>maxDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Exclude data created before the date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Add max length of list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxPrice</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Exclude data that has more total income

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Exclude data created later the date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minPrice</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Exclude data that has less total income

</td>
</tr>
</tbody>
</table>

### OrderFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isClosed</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReady</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Check if it is ready(or not)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Exclude data created before the date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Add max length of list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Exclude data created later the date

</td>
</tr>
</tbody>
</table>

### ProductFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Exclude data that has more price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Add max length of list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Exclude data that has less price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Use it for searching by name

</td>
</tr>
</tbody>
</table>

### TableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Add max length of list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Use it for searching by name

</td>
</tr>
</tbody>
</table>

### TaskFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>done</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Exclude task that has been done(or not)

</td>
</tr>
</tbody>
</table>

### UpdateAddress

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address1</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zip</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateCategory

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#updatecategorydata">UpdateCategoryData</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#wherecategory">WhereCategory</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateCategoryData

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>level</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateOpenHour

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#updateopenhourdata">UpdateOpenHourData</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#whereopenhour">WhereOpenHour</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateOpenHourData

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The end of the shift

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The day of the opening hour

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The start of the shift

</td>
</tr>
</tbody>
</table>

### UpdateOrder

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#updateorderdata">UpdateOrderData</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#whereorder">WhereOrder</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateOrderData

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Additonal description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReady</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

The order's status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Quantity

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tableId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateProduct

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#updateproductdata">UpdateProductData</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#whereproduct">WhereProduct</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateProductData

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>categoryId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateRestaurant

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#updateaddress">UpdateAddress</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#wherecurrency">WhereCurrency</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>settings</strong></td>
<td valign="top"><a href="#updatesettings">UpdateSettings</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateRestaurantPassword

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>old</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateSettings

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>enableAnalytics</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Enable analytics

</td>
</tr>
</tbody>
</table>

### UpdateTable

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#updatetabledata">UpdateTableData</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#wheretable">WhereTable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateTableData

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateWaiter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#updatewaiterdata">UpdateWaiterData</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#wherewaiter">WhereWaiter</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateWaiterData

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Gender

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileIcon</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Profile icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateWaiterPassword

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#updatewaiterpassworddata">UpdateWaiterPasswordData</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#wherewaiter">WhereWaiter</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateWaiterPasswordData

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>old</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WaiterFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Use it for searching by email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Use it for searching by gender

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Add max length of list

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Use it for searching by name

</td>
</tr>
</tbody>
</table>

### WhereCategory

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>root</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

### WhereCurrency

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name

</td>
</tr>
</tbody>
</table>

### WhereMeal

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### WhereOpenHour

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WhereOrder

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WhereProduct

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WhereTable

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### WhereWaiter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restaurantId</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Date

### DateTime

A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

