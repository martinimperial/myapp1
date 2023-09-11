 
const  queries = {
  get_products: "SELECT p.ProductID, p.ProductName, s.SupplierName, c.CategoryName, c.Description, p.Unit, p.Price FROM products p  join categories c on c.CategoryID = p.CategoryID join suppliers s on s.SupplierID = p.SupplierID limit 10"
}
 