-- Вывести ко-во заказов, которое компания Speedy Express доставила в Brazil
SELECT COUNT(Orders.OrderID) AS count_order
FROM Orders
JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
WHERE Shippers.ShipperName = 'Speedy Express'
  AND Customers.Country = 'Brazil'
-- Вывести среднюю стоимость напитка (Beverages) из Brazil
SELECT AVG(Products.Price) AS avg_price
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
WHERE Categories.CategoryName = 'Beverages'
  AND Suppliers.Country = 'Brazil'

-- Расчитать З/П сотрудника с фамилией Davolio (проекция: зп, фамилиясотрудника)

-- (код выглядел бы так, если бы в Employees был столбец с зарплатой, но там нет данных об зарплате)
SELECT Salary AS employee_salary, LastName
FROM Employees
WHERE LastName = 'Davolio'
