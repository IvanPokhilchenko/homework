import java.util.Scanner;

public class Coffee_machine {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Что вы предпочитаете: 1 - эспрессо, 2 - американо, 3 - капучино, 4 - чай");
        int type = sc.nextInt();
        sc.close();

        switch (type){
            case 1:
                System.out.println("Вы выбрали эспрессо. Подождите немного...");
                break;
            case 2:
                System.out.println("Вы выбрали американо. Подождите немного...");
                break;
            case 3:
                System.out.println("Вы выбрали капучино. Подождите немного...");
                break;
            case 4:
                System.out.println("Вы выбрали чай. Подождите немного...");
                break;
            default:
                System.out.println("Упс.... Выберите только из заданого списка");
        }

        if (type == 1){
            System.out.println("Ваше эспрессо готово");
        } else if (type == 2) {
            System.out.println("Добавление воды...");
        } else if (type  == 3) {
            System.out.println("Добавление вспененного молока...");
        } else if (type == 4) {
            System.out.println("Вода закипела...почти готово. Добавление пакетика чая");
        } else {
            System.out.println("Упс.... Выберите только из заданого списка");
        }

        String result = type == 1 ? "Ваше эспрессо готово" : type == 2 ? "Ваше американо готово" : type == 3 ? "Ваше капучино готово" : type == 4 ? "Ваш чай готов" : "Упс.... Выберите только из заданого списка";
        System.out.println(result);
    }
}
