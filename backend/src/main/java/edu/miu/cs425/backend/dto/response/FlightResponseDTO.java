package edu.miu.cs425.backend.dto.response;

import edu.miu.cs425.backend.dto.SeatDTO;
import edu.miu.cs425.backend.model.FlightStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlightResponseDTO {
    private Long flightId;
    private String flightNumber;
    private String departureCity;
    private String destinationCity;
    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    private FlightStatus status;
    private List<SeatDTO> seats;
}