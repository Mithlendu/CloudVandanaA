package JavaAssignment;

public class IsPangram {

    public static boolean isItPangram(String input) {
        boolean[] alphabetPresence = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char currentChar = input.charAt(i);

            if (currentChar >= 'a' && currentChar <= 'z') {
                int index = currentChar - 'a';
                alphabetPresence[index] = true;
            } else if (currentChar >= 'A' && currentChar <= 'Z') {
                int index = currentChar - 'A';
                alphabetPresence[index] = true;
            }
        }

        for (boolean present : alphabetPresence) {
            if (!present) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isItPangram(input);
        System.out.println("Is it a pangram? :- " + isPangram); // Output: true
    }
}
