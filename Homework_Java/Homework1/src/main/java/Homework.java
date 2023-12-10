import java.util.Scanner;

public class Homework {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Введите целое число: ");
        int a = sc.nextInt();

        System.out.println("Вывод на екран десятичная версия: " + a);

        System.out.println("Вывод на екран восьмеричная версия: " + Integer.toOctalString(a));

        System.out.println("Вывод на екран двоичная версия: " + Integer.toBinaryString(a));

        System.out.println("Вывод на екран шестнадцатеричная версия: " + Integer.toHexString(a));

        sc.close();
        }

    }

