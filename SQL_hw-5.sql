-- Вывести мин/стоимость товаров для каждой категории
-- (проекция: названиекатегории, минстоимость_товара)
SELECT Categories.CategoryName, MIN(Products.Price) AS min_product_price
FROM Categories
JOIN Products ON Categories.CategoryID = Products.CategoryID
GROUP BY Categories.CategoryName

-- Вывести ТОП-3 стран по количеству доставленных заказов
SELECT Customers.Country, COUNT(Orders.OrderID) AS total_orders
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.OrderDate IS NOT NULL
GROUP BY Customers.Country
ORDER BY TotalOrders DESC
LIMIT 3

-- Вывести ко-во заказов у каждого менеджера (фамилияменеджера, ко-возаказов)
SELECT Employees.LastName, COUNT(Orders.OrderID) AS total_orders
FROM Employees
JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
GROUP BY Employees.LastName