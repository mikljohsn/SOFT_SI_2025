import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.yaml.snakeyaml.Yaml;
import com.fasterxml.jackson.core.JsonParser;
import org.apache.commons.*;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

public class Main {
    private static final ObjectMapper jsonMapper = new ObjectMapper();
    private static final XmlMapper xmlMapper = new XmlMapper();
    private static final CsvMapper csvMapper = new CsvMapper();
    private static final Yaml yamlParser = new Yaml();

    public static void main(String[] args) {
        String folderPath = "C:\\Users\\mxjoh\\Documents\\SOFT\\SOFT_SI_2025\\00_course_material\\assignments\\01a_data_parsing_server_part_1\\Data";
        processFilesInFolder(folderPath);
    }

    static void processFilesInFolder(String folderPath) {
        try (Stream<Path> filePaths = Files.list(Paths.get(folderPath))) {
            filePaths.forEach(file -> {
                try {
                    Object parsedData = parseFile(file);
                    System.out.println("\nFile name: " + file.getFileName());
                    System.out.println("Parsed Data: \n" + parsedData);
                } catch (IOException e) {
                    System.err.println("Error parsing " + file.getFileName() + ": " + e.getMessage());
                }
            });
        } catch (IOException e) {
            System.err.println("Error reading files: " + e.getMessage());
        }
    }

    static Object parseFile(Path filePath) throws IOException {
        String content = Files.readString(filePath);
        String fileName = filePath.getFileName().toString();
        String fileExtension = fileName.contains(".") ? fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase() : "";

        return switch (fileExtension) {
            case "json" -> jsonMapper.readValue(content, Map.class);
            case "xml" -> xmlMapper.readValue(content, Map.class);
            case "yaml", "yml" -> yamlParser.load(content);
            case "csv" -> csvMapper.readerFor(Map.class)
                    .with(csvMapper.schemaFor(Map.class).withHeader())
                    .<Map<String, String>>readValues(content)
                    .readAll();
            case "txt" -> content;
            default -> "Unknown format";
        };
    }

}
