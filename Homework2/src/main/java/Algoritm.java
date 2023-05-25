import java.util.Scanner;

public class Algoritm {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Введите любое дробное число: ");
        double a = sc.nextDouble();
        int c = (int) a;

        System.out.print("введите другое любое дробное число: ");
        double b = sc.nextDouble();
        int d = (int) b;
        
        int i = d * c;

        System.out.println("Умножение двох дробных чисел равен: " + i);






        sc.close();
    }
}
