package SLAPPv1.Parameters;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="temp", schema="SLAgua")
public class Temp {

	@Id
	@Column(name="id", table="temp")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="temp",nullable=false,table="temp")
	private Float temp;

	@Column(name="pool",nullable=false,table="temp")
	private Long pool;

	@Column(name="year",nullable=false,table="temp")
	private Long year;
	@Column(name="month",nullable=false,table="temp")
	private Long month;
	@Column(name="day",nullable=false,table="temp")
	private Long day;

	@Column(name="hour",nullable=false,table="temp")
	private Long hour;
	@Column(name="minute",nullable=false,table="temp")
	private Long minute;

	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Float getTemp() {
		return temp;
	}
	public void setTemp(Float temp) {
		this.temp = temp;
	}
	public Long getPool() {
		return pool;
	}
	public void setPool(Long pool) {
		this.pool = pool;
	}
	public Long getYear() {
		return year;
	}
	public void setYear(Long year) {
		this.year = year;
	}
	public Long getMonth() {
		return month;
	}
	public void setMonth(Long month) {
		this.month = month;
	}
	public Long getDay() {
		return day;
	}
	public void setDay(Long day) {
		this.day = day;
	}
	public Long getHour() {
		return hour;
	}
	public void setHour(Long hour) {
		this.hour = hour;
	}
	public Long getMinute() {
		return minute;
	}
	public void setMinute(Long minute) {
		this.minute = minute;
	}
	
}
