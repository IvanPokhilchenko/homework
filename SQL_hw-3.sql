-- Вывести название и стоимость в USD одного самого дорогого проданного товара
SELECT Products.ProductName, Products.Price * 1.18 AS Price_in_USD
FROM OrderDetails
JOIN Products ON OrderDetail.ProductID = Products.ProductID
ORDER BY
    PriceUSD DESC
LIMIT 1
-- Вывести два самых дорогих товара из категории Beverages из USA
SELECT
    Products.Price * 1.18 AS Price_in_USD
FROM
    OrderDetails
JOIN
    Products ON OrderDetails.ProductID = Products.ProductID
JOIN
    Orders ON OrderDetails.OrderID = Orders.OrderID
JOIN
    Customers ON Orders.CustomerID = Customers.CustomerID
JOIN
    Suppliers ON Products.SupplierID = Suppliers.SupplierID
JOIN
    Categories ON Products.CategoryID = Categories.CategoryID
WHERE
    Categories.CategoryName = 'Beverages'
    AND Customers.Country = 'USA'
ORDER BY
    Price_in_USD DESC
LIMIT 2

-- Удалить товары с ценой менее 50 EUR
DELETE FROM Products
WHERE Price < 50

-- Вывести список стран, которые поставляют морепродукты
SELECT DISTINCT Suppliers.Country
FROM Suppliers
JOIN Products ON Suppliers.SupplierID = Products.SupplierID
JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryName LIKE '%Seafood%'
-- Очистить поле ContactName у всех клиентов не из China
UPDATE Customers
SET ContactName = ''
WHERE Country NOT IN ('China')