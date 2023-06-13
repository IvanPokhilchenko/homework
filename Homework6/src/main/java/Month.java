import java.util.Scanner;

public class Month {
    public static void main(String[] args) {
        // зима 1,2,12
        // весна 3,4,5
        // лето 6,7,8
        // осень 9,10,11
        Scanner sc = new Scanner(System.in);
        System.out.println("Введите номер месяца: ");
        int month = sc.nextInt();
        sc.close();
        if (month >=1 && month <=2 || month == 12){
            System.out.println("зима");
        } else if (month >= 3 && month <= 5) {
            System.out.println("весна");
        } else if (month >= 6 && month <= 8) {
            System.out.println("лето");
        } else if (month >= 9 && month <= 11) {
            System.out.println("осень");
        } else
            System.out.println("Вы ввели некорректное число");


    }
}
