import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0) return products[mid];
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Mobile", "Electronics"),
            new Product(4, "Watch", "Accessories"),
        };

        System.out.println("🔍 Linear Search for 'Mobile'");
        Product p1 = linearSearch(products, "Mobile");
        System.out.println(p1 != null ? p1 : "Product not found");

        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        System.out.println("\n🔍 Binary Search for 'Mobile'");
        Product p2 = binarySearch(products, "Mobile");
        System.out.println(p2 != null ? p2 : "Product not found");
    }
}
